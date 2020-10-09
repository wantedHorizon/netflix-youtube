/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useState, useContext, createContext } from 'react';

import {
  Container,
  Group,
  Title,
  SubTitle,
  Text,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  Maturity,
  Content,
  Meta,
  Entities,
  Item,
  Image,
  Feature,
} from './styles/card';

export const FeatureContext = createContext();

const YoutubeCard = ({ children, ...restProps }) => {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  return (
    <FeatureContext.Provider
      value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}
    >
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  );
};

YoutubeCard.Group = function YoutubeCardGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

YoutubeCard.Title = function YoutubeCardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

YoutubeCard.SubTitle = function YoutubeCardSubTitle({
  children,
  ...restProps
}) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

YoutubeCard.Text = function YoutubeCardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

YoutubeCard.Entities = function YoutubeCardEntities({
  children,
  ...restProps
}) {
  return <Entities {...restProps}>{children}</Entities>;
};

YoutubeCard.Meta = function YoutubeCardMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>;
};

YoutubeCard.Item = function YoutubeCardItem({ item, children, ...restProps }) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);

  return (
    <Item
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
      }}
      {...restProps}
    >
      {children}
    </Item>
  );
};

YoutubeCard.Image = function YoutubeCardImage({ ...restProps }) {
  return <Image {...restProps} />;
};

YoutubeCard.Feature = function YoutubeCardFeature({
  children,
  category,
  ...restProps
}) {
  const { showFeature, itemFeature, setShowFeature } = useContext(
    FeatureContext
  );

  return showFeature ? (
    <Feature
      {...restProps}
      src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
    >
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <FeatureClose onClick={() => setShowFeature(false)}>
          <img src="/images/icons/close.png" alt="Close" />
        </FeatureClose>

        <Group margin="30px 0" flexDirection="row" alignItems="center">
          <Maturity rating={itemFeature.maturity}>
            {itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}
          </Maturity>
          <FeatureText fontWeight="bold">
            {itemFeature.genre.charAt(0).toUpperCase() +
              itemFeature.genre.slice(1)}
          </FeatureText>
        </Group>

        {children}
      </Content>
    </Feature>
  ) : null;
};

export default YoutubeCard;
