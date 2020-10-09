/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import youtubeAPI from '../api/youtube-api';
import {
  Card as YoutubeCard,
  Header,
  YoutubePlayer as Player,
} from '../components';
import { FirebaseContext } from '../context/firebase';

import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import FooterContainer from './FooterContainer';
import useYoutubeVideos from '../hooks/useYoutubeVideos';

const categoriesTitle = [
  'drama',
  'thriller',
  'children',
  'suspense',
  'romance',
];

const BrowseYoutubeContainer = () => {
  const [categories, setCategories] = useState([]);

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  const [results, term, setTerm] = useYoutubeVideos();
  const [clickedVideo, setClickedVideo] = useState('');

  const history = useHistory();
  const fetchInitialCategories = (categoriesArray) => {
    const resArray = categoriesArray.map((cat) => {
      const response = youtubeAPI.get('/search', {
        params: {
          q: cat,
        },
      });
      return response;
    });
    return Promise.all(resArray);
  };
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('categories'));
    if (localData) {
      setCategories(localData);
    } else {
      try {
        const resolveCat = async (cat) => {
          const data = await cat;
          const newData = data
            .map((res) => {
              if (res.status === 200) {
                return {
                  title: res.config.params.q,
                  items: res.data.items,
                };
              }

              return null;
            })
            .filter((item) => item);

          localStorage.setItem('categories', JSON.stringify(newData));
          setCategories(newData);
        };
        resolveCat(fetchInitialCategories(categoriesTitle));
      } catch (e) {
        console.log(e);
      }
    }
  }, []);

  let displayCardsArr = categories;

  if (results.length > 0 && term.length > 0 && results[0].title === term) {
    displayCardsArr = results;
  }
  return (
    <>
      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
            <Header.TextLink
              active={false}
              onClick={() => history.push('/browse')}
            >
              Series
            </Header.TextLink>
            <Header.TextLink
              active={false}
              onClick={() => history.push('/browse')}
            >
              Films
            </Header.TextLink>
            <Header.TextLink active="true">Youtube</Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search searchTerm={term} setSearchTerm={setTerm} />
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signOut()}>
                    Sign out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>

        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the world
            around him.
          </Header.Text>
          <Player>
            <Player.PlayButton> Play </Player.PlayButton>
            <Player.Video />
          </Player>
        </Header.Feature>
      </Header>

      <YoutubeCard.Group>
        {displayCardsArr &&
          displayCardsArr.map((category) => (
            <YoutubeCard key={category.title}>
              <YoutubeCard.Title>{category.title}</YoutubeCard.Title>
              <YoutubeCard.Entities>
                {category &&
                  category.items.map((item, i) => (
                    <YoutubeCard.Item
                      key={`${item.id.videoId}-${i}`}
                      item={item}
                    >
                      <YoutubeCard.Image
                        onClick={() => setClickedVideo(item.id.videoId)}
                        src={`${item.snippet.thumbnails.medium.url}`}
                      />
                      <YoutubeCard.Meta>
                        <YoutubeCard.SubTitle>
                          {item.snippet.channelTitle}
                        </YoutubeCard.SubTitle>
                        <YoutubeCard.Text>
                          {item.snippet.description}
                        </YoutubeCard.Text>
                      </YoutubeCard.Meta>
                    </YoutubeCard.Item>
                  ))}
              </YoutubeCard.Entities>
              <YoutubeCard.YoutubeFeature
                background="red"
                category={category.title}
              >
                <Player>
                  <Player.Button />
                  <Player.Video src={clickedVideo} />
                </Player>
              </YoutubeCard.YoutubeFeature>
            </YoutubeCard>
          ))}
      </YoutubeCard.Group>

      <FooterContainer />
    </>
  );
};
export default BrowseYoutubeContainer;
