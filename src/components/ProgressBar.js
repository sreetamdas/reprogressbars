import React from 'react';
import PropTypes from 'prop-types';
import ProgressProvider from './ProgressProvider';
import Bar from './Bar';

function only(originalObject, keys) {
  const newObject = {};
  keys.forEach((key) => {
    if (originalObject[key] !== undefined) {
      newObject[key] = originalObject[key];
    }
  });
  return newObject;
}

export default function ProgressBar(props) {
  const barProps = only(props, ['color', 'height', 'className', 'useBoxShadow']);
  return (
    <ProgressProvider isLoading={props.isLoading}>
      <Bar {...barProps} />
    </ProgressProvider>
  );
}