import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FeatureGroup, Circle } from 'react-leaflet';

import MarkerPosition from '../MarkerPosition';

const UnitScoutObject = ({ id, position, detectionRadius, subToUpdate }) => {
  useEffect(() => subToUpdate(), [subToUpdate]);

  return (
    position && (
      <FeatureGroup>
        <Circle center={[position.x, position.y]} radius={detectionRadius} />
        <MarkerPosition number={id} position={position} options={{ color: 'darkmagenta' }} />
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
  subToUpdate: PropTypes.func
};

UnitScoutObject.defaultProps = {
  position: null,
  detectionRadius: null,
  subToUpdate: () => {}
};

export default UnitScoutObject;
