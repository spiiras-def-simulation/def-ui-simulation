import React from 'react';
import { FeatureGroup } from 'react-leaflet';
import CombatImpassableAreas from '../CombatImpassableAreas';

const CombatLocations = () => (
  <FeatureGroup>
    <CombatImpassableAreas />
  </FeatureGroup>
);

export default CombatLocations;
