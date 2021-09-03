import React, { useContext, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { FeatureGroup, Polyline } from 'react-leaflet';

import MapContext from '../ViewMap/context';

import MarkerPosition from '../MarkerPosition';

const UnitAttackPoints = ({ unit, subToUpdate }) => {
  const { projection } = useContext(MapContext);

  useEffect(() => subToUpdate(), [subToUpdate]);

  const { status = null, coordinates = null, attackPoints = null } = unit || {};
  const [points, attackPath] = useMemo(() => {
    const projPoints = attackPoints ? attackPoints.map(point => projection.project(point)) : [];
    const projAttackPath = coordinates
      ? projPoints.reduce((path, attackPoint) => [...path, [attackPoint.x, attackPoint.y]], [
          [coordinates.x, coordinates.y]
        ])
      : [];
    return [projPoints, projAttackPath];
  }, [coordinates, attackPoints, projection]);

  return (
    status === 'ATTACK_TARGET' && (
      <FeatureGroup>
        <Polyline positions={attackPath} color="red" weight={2} />
        {points.map(point => (
          <MarkerPosition position={point} options={{ color: 'red', size: 12 }} />
        ))}
      </FeatureGroup>
    )
  );
};

UnitAttackPoints.propTypes = {
  unit: PropTypes.shape({
    id: PropTypes.string.isRequired,
    status: PropTypes.string,
    coordinates: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number
    }),
    attackPoints: PropTypes.arrayOf(
      PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number
      })
    )
  }).isRequired,
  subToUpdate: PropTypes.func
};

UnitAttackPoints.defaultProps = {
  subToUpdate: () => {}
};

export default UnitAttackPoints;
