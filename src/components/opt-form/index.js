/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Container, Input, Break, Button, Text } from './styles/opt-form';

const OptForm = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

OptForm.Input = function OptFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

OptForm.Text = function OptFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

OptForm.Break = function OptFormBreak({ ...restProps }) {
  return <Break {...restProps} />;
};

export default OptForm;
