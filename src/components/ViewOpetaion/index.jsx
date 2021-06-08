import React from 'react';

import ViewMap from '../ViewMap';
import WeatherStatus from '../WeatherStatus';
import DateStatus from '../DateStatus';
import MissionsControl from '../MissionsControl';
import StatusControls from '../StatusControls';

const ViewOperation = () => {
  return (
    <ViewMap>
      <DateStatus position="topleft" />
      <WeatherStatus position="topleft" />
      <MissionsControl position="topleft" stylization="modal-theme" />
      <StatusControls position="topright" />
    </ViewMap>
  );
};

export default ViewOperation;
