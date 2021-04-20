import React from 'react';

import ViewMap from '../ViewMap';
// import LayerRobots from '../LayerRobots';
import WeatherStatus from '../WeatherStatus';
import DateStatus from '../DateStatus';
import MissionsControl from '../MissionsControl';
import StatusControls from '../StatusControls';

const ViewOperation = () => {
  return (
    <ViewMap config={{ mapCenter: [-1500, 1500] }}>
      <WeatherStatus position="topleft" />
      <DateStatus position="topleft" />
      <MissionsControl position="topleft" stylization="modal-theme" />
      <StatusControls position="topright" />
      {/* <LayerRobots /> */}
    </ViewMap>
  );
};

export default ViewOperation;
