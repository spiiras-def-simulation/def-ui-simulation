import React from 'react';
import PropTypes from 'prop-types';
import { Circle } from 'react-leaflet';

const TVSArea = ({ center, size }) => {
  return (
    <Circle center={[center.x, center.y]} radius={size / 2} fill={false} color="black" weight={2} />
  );
};

TVSArea.propTypes = {
  center: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  }).isRequired,
  size: PropTypes.number.isRequired
};

export default TVSArea;
