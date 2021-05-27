import React from 'react';

import ViewMap from '../ViewMap';
import WeatherStatus from '../WeatherStatus';
import DateStatus from '../DateStatus';
import MissionsControl from '../MissionsControl';
import StatusControls from '../StatusControls';

const ViewOperation = () => {
  return (
    <ViewMap config={{ mapCenter: [-1500, 1500] }}>
      <DateStatus position="topleft" />
      <WeatherStatus position="topleft" />
      <MissionsControl position="topleft" stylization="modal-theme" />
      <StatusControls position="topright" />
    </ViewMap>
  );
};

export default ViewOperation;
