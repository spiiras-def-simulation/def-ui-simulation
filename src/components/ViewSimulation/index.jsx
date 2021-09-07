import React from 'react';

import ViewMap from '../ViewMap';
import SimulationControl from '../SimulationControl';
import CombatLocations from '../CombatLocations';

import GroundTargetObjectsWithData from '../GroundTargetObjectsWithData';
import UnitsLaunchedWithData from '../UnitsLaunchedWithData';

const ViewSimulation = () => {
  return (
    <ViewMap>
      <SimulationControl stylization="modal-theme" />
      <GroundTargetObjectsWithData />
      <UnitsLaunchedWithData />
      <CombatLocations />
    </ViewMap>
  );
};

export default ViewSimulation;
