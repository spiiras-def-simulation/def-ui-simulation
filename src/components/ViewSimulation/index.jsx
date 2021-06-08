import React from 'react';

import ViewMap from '../ViewMap';
import SimulationControl from '../SimulationControl';
import WeatherStatus from '../WeatherStatus';
import DateStatus from '../DateStatus';
import EventsTimeline from '../EventsTimeline';

const ViewSimulation = () => {
  return (
    <ViewMap>
      <SimulationControl stylization="modal-theme" />
      <DateStatus position="topright" />
      <WeatherStatus position="topright" />
      <EventsTimeline position="topright" />
    </ViewMap>
  );
};

export default ViewSimulation;
