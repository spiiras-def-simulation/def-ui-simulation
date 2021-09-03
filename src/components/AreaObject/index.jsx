import React from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';
import { Polygon } from 'react-leaflet';

const AreaObject = ({ id, data, ...options }) => {
  return (
    data && (
      <Polygon
        id={id}
        positions={L.GeoJSON.coordsToLatLngs(data.geometry.coordinates[0])}
        color={options.color}
        fill={options.fill}
      />
    )
  );
};

AreaObject.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.shape({
    geometry: PropTypes.shape({
      coordinates: PropTypes.arrayOf(PropTypes.array)
    })
  }),
  color: PropTypes.string,
  fill: PropTypes.bool
};

AreaObject.defaultProps = {
  data: null,
  color: 'blue',
  fill: true
};

export default AreaObject;
