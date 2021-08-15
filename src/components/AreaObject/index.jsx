import React from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';
import { Polygon } from 'react-leaflet';

const AreaObject = ({ color, id, data }) => {
  return (
    data && (
      <Polygon
        id={id}
        positions={L.GeoJSON.coordsToLatLngs(data.geometry.coordinates[0])}
        color={color}
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
  color: PropTypes.string
};

AreaObject.defaultProps = {
  data: null,
  color: 'blue'
};

export default AreaObject;
