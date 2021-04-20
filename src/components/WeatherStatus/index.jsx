import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Control from 'react-leaflet-control';

import './index.css';

const WeatherStatus = ({ position, stylization }) => (
  <Control position={position}>
    <div className={classNames('weather-status', stylization)}>
      <div className="weather-status-element badge">15°</div>
      <div className="weather-status-element badge">Ветер 0.0, 0.5, 0.0, 3 м/с</div>
      <div className="weather-status-element badge">Давление 761 мм. рт. ст.</div>
    </div>
  </Control>
);

WeatherStatus.propTypes = {
  position: PropTypes.string,
  stylization: PropTypes.string
};

WeatherStatus.defaultProps = {
  position: '',
  stylization: ''
};

export default WeatherStatus;
