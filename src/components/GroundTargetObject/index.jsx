import React from 'react';
import PropTypes from 'prop-types';
import { FeatureGroup } from 'react-leaflet';

import GroundTargetPosition from '../GroundTargetPosition';
import GroundTargetPath from '../GroundTargetPath';

const GroundTargetObject = ({ id }) => (
  <FeatureGroup>
    <GroundTargetPath id={id} />
    <GroundTargetPosition id={id} />
  </FeatureGroup>
);

GroundTargetObject.propTypes = {
  id: PropTypes.string.isRequired
};

export default GroundTargetObject;
