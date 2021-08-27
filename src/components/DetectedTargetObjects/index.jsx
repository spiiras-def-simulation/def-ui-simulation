import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FeatureGroup } from 'react-leaflet';

import GroundTargetPosition from '../GroundTargetPosition';

const DetectedTargetObjects = ({ objects, subToUpdate }) => {
  useEffect(() => subToUpdate(), [subToUpdate]);

  return (
    <FeatureGroup>
      {objects.map(({ id }) => (
        <GroundTargetPosition key={id} id={id} />
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
