import React from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';
import { Marker } from 'react-leaflet';

import './index.css';

const ObjectRobot = ({ robot: { position, markerColor } }) => (
  <Marker
    position={[position.y, position.x]}
    icon={L.divIcon({
      className: 'robot-position-marker',
      html: `<div class="order-delivery-icon" style="background-color:${markerColor}"/>`
    })}
  />
);

ObjectRobot.propTypes = {
  robot: PropTypes.shape({
    position: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired
    }),
    markerColor: PropTypes.string
  })
};

ObjectRobot.defaultProps = {
  robot: {}
};

export default ObjectRobot;
