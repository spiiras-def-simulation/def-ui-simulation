import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FeatureGroup } from 'react-leaflet';

import GroundTargetObjectWithData from '../GroundTargetObjectWithData';

const GroundTargetObjects = ({ objects, subToUpdate }) => {
  useEffect(() => subToUpdate(), [subToUpdate]);
  return (
    <FeatureGroup>
      {objects.map(({ id }) => (
        <GroundTargetObjectWithData key={id} id={id} />
      ))}
    </FeatureGroup>
  );
};

GroundTargetObjects.propTypes = {
  objects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  ).isRequired,
  subToUpdate: PropTypes.func
};

GroundTargetObjects.defaultProps = {
  subToUpdate: () => {}
};

export default GroundTargetObjects;
