import React from 'react';

import ViewMap from '../ViewMap';
import SimulationControl from '../SimulationControl';
import WeatherStatus from '../WeatherStatus';
import DateStatus from '../DateStatus';
import EventsTimeline from '../EventsTimeline';

const ViewSimulation = () => {
  return (
    <ViewMap config={{ mapCenter: [-1500, 1500] }}>
      <SimulationControl stylization="modal-theme" />
      <DateStatus position="topright" />
      <WeatherStatus position="topright" />
      <EventsTimeline position="topright" />
    </ViewMap>
  );
};

export default ViewSimulation;
