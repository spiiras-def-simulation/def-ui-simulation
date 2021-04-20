import React from 'react';

import ViewMap from '../ViewMap';
import SimulationControl from '../SimulationControl';
import WeatherStatus from '../WeatherStatus';
import DateStatus from '../DateStatus';

const ViewSimulation = () => {
  return (
    <ViewMap config={{ mapCenter: [-1500, 1500] }}>
      <SimulationControl stylization="modal-theme" />
      <WeatherStatus position="topright" />
      <DateStatus position="topright" />
    </ViewMap>
  );
};

export default ViewSimulation;
