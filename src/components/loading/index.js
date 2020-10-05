/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { LockBody, ReleaseBody, Spinner, Picture } from './styles/loading';

const Loading = ({ src, ...restProps }) => {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} data-testid="loading-picture" />
    </Spinner>
  );
};

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};

export default Loading;
