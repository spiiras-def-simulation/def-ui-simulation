import React from 'react';
import { useQuery } from '@apollo/client';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Control from 'react-leaflet-control';

import { GET_WEATHER_STATUS } from './requests';

import './index.css';

const WeatherStatus = ({ position, stylization }) => {
  const { data } = useQuery(GET_WEATHER_STATUS);

  // useEffect(() => {
  //   subscribeToMore({
  //     document: SUBSCRIBE_ORDERS_STATUS_LIST,
  //     updateQuery: (prev, { subscriptionData }) => {
  //       if (!subscriptionData.data) return prev;
  //       const { orders } = subscriptionData.data;
  //       return {
  //         orders
  //       };
  //     }
  //   });
  // }, [subscribeToMore]);

  const { status = null } = data || {};
  return (
    <Control position={position}>
      {status && (
        <div className={classNames('weather-status', stylization)}>
          <div className="weather-status-element badge">
            <i className="fas fa-thermometer-three-quarters" />
            <span>{status.temperature}°</span>
          </div>
          <div className="weather-status-element badge">
            <i className="fas fa-wind" />
            {status.wind && (
              <span>
                {status.wind.direction.x}x {status.wind.direction.y}y {status.wind.direction.z}z,{' '}
                {status.wind.velocity} м/с
              </span>
            )}
          </div>
        </div>
      )}
    </Control>
  );
};

WeatherStatus.propTypes = {
  position: PropTypes.string,
  stylization: PropTypes.string
};

WeatherStatus.defaultProps = {
  position: '',
  stylization: ''
};

export default WeatherStatus;
