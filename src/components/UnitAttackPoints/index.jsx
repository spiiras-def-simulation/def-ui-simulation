import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { FeatureGroup, Polyline } from 'react-leaflet';

import MarkerPosition from '../MarkerPosition';

const UnitAttackPoints = ({ unit, subToUpdate }) => {
  useEffect(() => subToUpdate(), [subToUpdate]);
  const { status, coordinates, attackPoints } = unit;

  const attackPath = useMemo(
    () =>
      attackPoints.reduce((path, attackPoint) => [...path, [attackPoint.x, attackPoint.y]], [
        [coordinates.x, coordinates.y]
      ]),
    [coordinates, attackPoints]
  );

  return (
    status === 'ATTACK_TARGET' && (
      <FeatureGroup>
        <Polyline positions={attackPath} color="red" weight={2} />
        {attackPoints.map(point => (
          <MarkerPosition position={point} options={{ color: 'red' }} />
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
