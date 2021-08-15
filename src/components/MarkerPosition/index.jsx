import React from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';
import { Marker } from 'react-leaflet';

import './index.css';

const MarkerPosition = ({ position, number, options }) => {
  const { color = 'red' } = options;
  return (
    <Marker
      position={[position.x, position.y]}
      icon={L.divIcon({
        className: 'marker-position',
        html: `<div class="marker-position-icon" style="background-color:${color}"><span>${number}</span></div>`
      })}
    />
  );
};

MarkerPosition.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  }).isRequired,
  number: PropTypes.string,
  options: PropTypes.shape({
    color: PropTypes.string
  })
};

MarkerPosition.defaultProps = {
  number: '',
  options: {}
};

export default MarkerPosition;
