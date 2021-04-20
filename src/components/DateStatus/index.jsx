import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Control from 'react-leaflet-control';

import './index.css';

const date = '4 июня 10:45:30';

const DateStatus = ({ position, stylization }) => {
  return (
    <Control position={position}>
      <div className={classNames('date-status badge', stylization)}>
        <i className="far fa-clock" />
        <span>{date}</span>
      </div>
    </Control>
  );
};

DateStatus.propTypes = {
  position: PropTypes.string,
  stylization: PropTypes.string
};

DateStatus.defaultProps = {
  position: '',
  stylization: ''
};

export default DateStatus;
