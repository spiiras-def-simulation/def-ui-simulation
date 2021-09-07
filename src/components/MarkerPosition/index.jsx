import React from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';
import { Marker } from 'react-leaflet';

import './index.css';

const MarkerPosition = ({ position, number, options }) => {
  const { color = 'red', size = 14, fontSize = 8 } = options;
  const styles = `background-color:${color};width:${size}px;height:${size}px;font-size:${fontSize}px`;
  return (
    <Marker
      position={[position.x, position.y]}
      icon={L.divIcon({
        className: 'marker-position',
        html: `
          <div class="marker-position-icon" style=${styles}>
            <span>${number}</span>
          </div>
        `
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
    color: PropTypes.string,
    size: PropTypes.number,
    fontSize: PropTypes.number
  })
};

MarkerPosition.defaultProps = {
  number: '',
  options: {}
};

export default MarkerPosition;
