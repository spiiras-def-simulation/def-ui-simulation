import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';
import { Polygon } from 'react-leaflet';

import MapContext from '../ViewMap/context';

const MapObject = ({ coordinates, options, isLocal }) => {
  const { projection } = useContext(MapContext);

  const positions = useMemo(() => {
    return isLocal
      ? coordinates
          .map(point => projection.project(L.point(point)))
          .map(point => [point.x, point.y])
      : coordinates;
  }, [isLocal, coordinates, projection]);

  const { color } = options;
  return <Polygon positions={positions} color={color} />;
};

MapObject.propTypes = {
  coordinates: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  options: PropTypes.shape({
    color: PropTypes.string
  }),
  isLocal: PropTypes.bool
};

MapObject.defaultProps = {
  options: {},
  isLocal: false
};

export default MapObject;
