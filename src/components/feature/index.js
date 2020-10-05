/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { Container, Title, SubTitle } from './styles/feature';

const Feature = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Feature.Title = function FeatureTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Feature.SubTitle = function FeatureSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

export default Feature;
