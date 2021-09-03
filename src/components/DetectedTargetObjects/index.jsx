import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FeatureGroup } from 'react-leaflet';

import MapContext from '../ViewMap/context';

import MarkerPosition from '../MarkerPosition';

const DetectedTargetObjects = ({ objects, subToUpdate }) => {
  const { projection } = useContext(MapContext);

  useEffect(() => subToUpdate(), [subToUpdate]);

  return (
    <FeatureGroup>
      {objects.map(({ id, detectedCoordinates }) => (
        <MarkerPosition
          key={id}
          position={projection.project(detectedCoordinates)}
          options={{ color: 'black', size: 12 }}
        />
      ))}
    </FeatureGroup>
  );
};

DetectedTargetObjects.propTypes = {
  objects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string
    })
  ).isRequired,
  subToUpdate: PropTypes.func
};

DetectedTargetObjects.defaultProps = {
  subToUpdate: () => {}
};

export default DetectedTargetObjects;
