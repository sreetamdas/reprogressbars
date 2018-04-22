import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Bar(props) {
  const { useBoxShadow, height, color, className, progress: { active, value } } = props;

  const barStyles = {
    width: value + '%',
    height,
    backgroundColor: "#f73d1c"
  };

  if (useBoxShadow) {
    barStyles.boxShadow = `0 0 5px #f73d1c`;
  }

  const wrapperClassNames = classNames('reprogressbar', className, {
    'reprogressbar--active': active,
    'reprogressbar--inactive': !active
  });

  return (
    <div className={wrapperClassNames}>
      {active && <div className="reprogressbar_bar" style={barStyles} />}
    </div>
  );
}

Bar.defaultProps = {
  color: '#29d',
  height: '2px',
  useBoxShadow: true
};
