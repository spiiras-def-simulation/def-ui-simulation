import React from 'react';
import { FeatureGroup } from 'react-leaflet';
import CombatImpassableAreas from '../CombatImpassableAreas';
import CombatJammingArea from '../CombatJammingArea';

const CombatLocations = () => (
  <FeatureGroup>
    <CombatImpassableAreas />
    <CombatJammingArea />
  </FeatureGroup>
);

export default CombatLocations;
