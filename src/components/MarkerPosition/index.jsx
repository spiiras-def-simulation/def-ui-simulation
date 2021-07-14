import React from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';
import { Marker } from 'react-leaflet';

import './index.css';

const MarkerPosition = ({ position, options }) => {
  const { color = 'red' } = options;
  return (
    <Marker
      position={[position.x, position.y]}
      icon={L.divIcon({
        className: 'marker-position',
        html: `<div class="marker-position-icon" style="background-color:${color}"/>`
      })}
    />
  );
};

MarkerPosition.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  }).isRequired,
  options: PropTypes.shape({
    color: PropTypes.string
  })
};

MarkerPosition.defaultProps = {
  options: {}
};

export default MarkerPosition;
