import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.css';

const TimeEvent = ({ stylization, offset }) => {
  return <div classNames={classNames('time-event', stylization)}></div>;
};

TimeEvent.propTypes = {
  stylization: PropTypes.string,
  offset: PropTypes.number
};

TimeEvent.defaultProps = {
  stylization: '',
  offset: 0
};

export default TimeEvent;
