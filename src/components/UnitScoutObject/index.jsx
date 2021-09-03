import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FeatureGroup, Circle } from 'react-leaflet';

import TVSArea from '../TVSArea';
import MarkerPosition from '../MarkerPosition';

const UnitScoutObject = ({ object, subToUpdate }) => {
  useEffect(() => subToUpdate(), [subToUpdate]);
  const { id, detectionRadius, tvsSize, coordinates } = object;
  return (
    coordinates && (
      <FeatureGroup>
        <Circle
          center={[coordinates.x, coordinates.y]}
          radius={detectionRadius}
          fill={false}
          color="darkmagenta"
          weight={2}
        />
        <TVSArea center={coordinates} size={tvsSize} />
        <MarkerPosition number={id} position={coordinates} options={{ color: 'darkmagenta' }} />
      </FeatureGroup>
    )
  );
};

UnitScoutObject.propTypes = {
  object: PropTypes.shape({
    id: PropTypes.string.isRequired,
    detectionRadius: PropTypes.number,
    tvsSize: PropTypes.number,
    coordinates: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number
    })
  }).isRequired,
  subToUpdate: PropTypes.func
};

UnitScoutObject.defaultProps = {
  subToUpdate: () => {}
};

export default UnitScoutObject;
