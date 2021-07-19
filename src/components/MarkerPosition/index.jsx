import React from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';
import { Marker } from 'react-leaflet';

import './index.css';

const MarkerPosition = ({ id, position, options }) => {
  const { color = 'red' } = options;
  return (
    <Marker
      position={[position.x, position.y]}
      icon={L.divIcon({
        className: 'marker-position',
        html: `<div class="marker-position-icon" style="background-color:${color}"><span>${id}</span></div>`
      })}
    />
  );
};

MarkerPosition.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  }).isRequired,
  id: PropTypes.string,
  options: PropTypes.shape({
    color: PropTypes.string
  })
};

MarkerPosition.defaultProps = {
  id: '',
  options: {}
};

export default MarkerPosition;
