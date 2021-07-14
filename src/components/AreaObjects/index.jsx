import React from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';
import { Polygon } from 'react-leaflet';

const AreaObjects = ({ color, objects }) => {
  const formatObjects = objects.map(({ id, data }) => ({
    id,
    coordinates: L.GeoJSON.coordsToLatLngs(data.geometry.coordinates[0])
  }));
  return formatObjects.map(object => (
    <Polygon key={object.id} id={object.id} positions={object.coordinates} color={color} />
  ));
};

AreaObjects.propTypes = {
  color: PropTypes.string,
  objects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      data: PropTypes.shape({})
    })
  )
};

AreaObjects.defaultProps = {
  color: 'blue',
  objects: []
};

export default AreaObjects;
