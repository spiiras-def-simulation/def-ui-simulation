import React, { useContext, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';
import { FeatureGroup, Circle, Polyline } from 'react-leaflet';

import MapContext from '../ViewMap/context';

import MarkerPosition from '../MarkerPosition';

const UnitScoutObject = ({ id, position, detectionRadius, path, subToUpdate }) => {
  const { projection } = useContext(MapContext);

  useEffect(() => subToUpdate(), [subToUpdate]);

  const fixPath = useMemo(() => {
    const simplify = path ? L.LineUtil.simplify(path, 5) : [];
    return simplify.map(point => projection.project(point)).map(point => [point.x, point.y]);
  }, [path, projection]);

  return (
    position && (
      <FeatureGroup>
        <Circle center={[position.x, position.y]} radius={detectionRadius} />
        <MarkerPosition number={id} position={position} options={{ color: 'darkmagenta' }} />
        <Polyline positions={fixPath} />
      </FeatureGroup>
    )
  );
};

UnitScoutObject.propTypes = {
  id: PropTypes.string.isRequired,
  position: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  }),
  detectionRadius: PropTypes.number,
  path: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number
    })
  ),
  subToUpdate: PropTypes.func
};

UnitScoutObject.defaultProps = {
  position: null,
  detectionRadius: null,
  path: null,
  subToUpdate: () => {}
};

export default UnitScoutObject;
