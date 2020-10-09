/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';
import {
  Container,
  Button,
  Overlay,
  Inner,
  Close,
  PlayButton,
} from './styles/player';

export const PlayerContext = createContext();

const YoutubePlayer = ({ children, ...restProps }) => {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
};

YoutubePlayer.Video = function PlayerVideo({
  src = 'zAGVQLHvwOY',
  ...restProps
}) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay
          onClick={() => setShowPlayer(false)}
          data-testid="player"
          {...restProps}
        >
          <Inner>
            <iframe
              title="youtube"
              height="100%"
              width="100%"
              src={`https://www.youtube.com/embed/${src}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <Close />
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};

YoutubePlayer.Button = function PlayerButton({ ...restProps }) {
  // eslint-disable-next-line no-unused-vars
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return (
    <Button onClick={() => setShowPlayer(() => !showPlayer)} {...restProps}>
      Play
    </Button>
  );
};

YoutubePlayer.PlayButton = function YoutubePlayerPlayButton({
  children,
  ...restProps
}) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return (
    <PlayButton onClick={() => setShowPlayer(() => !showPlayer)} {...restProps}>
      {children}
    </PlayButton>
  );
};
export default YoutubePlayer;
