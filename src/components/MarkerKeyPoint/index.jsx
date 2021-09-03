import React from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';
import { Marker } from 'react-leaflet';

import './index.css';

const MarkerKeyPoint = ({ position, options }) => {
  const { color = 'red', size = 16, fontSize = 9 } = options;
  const styles = `background-color:${color};width:${size}px;height:${size}px;line-height:${size}px;font-size:${fontSize}px`;
  return (
    <Marker
      position={[position.x, position.y]}
      icon={L.divIcon({
        className: 'marker-position',
        html: `
          <div class="marker-position-icon" style=${styles}>
            <i class="fas fa-star-of-life"></i>
          </div>
        `
      })}
    />
  );
};

MarkerKeyPoint.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  }).isRequired,
  options: PropTypes.shape({
    color: PropTypes.string,
    size: PropTypes.number,
    fontSize: PropTypes.number
  })
};

MarkerKeyPoint.defaultProps = {
  options: {}
};

export default MarkerKeyPoint;
