import React from 'react';

import ViewMap from '../ViewMap';
import SimulationControl from '../SimulationControl';
import CombatLocations from '../CombatLocations';

import GroundTargetObjectsWithData from '../GroundTargetObjectsWithData';

const ViewSimulation = () => {
  return (
    <ViewMap>
      <SimulationControl stylization="modal-theme" />
      <GroundTargetObjectsWithData />
      <CombatLocations />
    </ViewMap>
  );
};

export default ViewSimulation;
