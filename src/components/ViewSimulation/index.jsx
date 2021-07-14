import React from 'react';

import ViewMap from '../ViewMap';
import SimulationControl from '../SimulationControl';
import WeatherStatus from '../WeatherStatus';
import DateStatus from '../DateStatus';
// import EventsTimeline from '../EventsTimeline';

import LayerTargetObjects from '../LayerTargetObjects';

const ViewSimulation = () => {
  return (
    <ViewMap>
      <SimulationControl stylization="modal-theme" />
      <DateStatus position="topright" />
      <WeatherStatus position="topright" />
      {/* <EventsTimeline position="topright" /> */}
      <LayerTargetObjects />
    </ViewMap>
  );
};

export default ViewSimulation;
