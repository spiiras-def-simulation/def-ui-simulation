import React from 'react';

import ViewMap from '../ViewMap';
import WeatherStatus from '../WeatherStatus';
import DateStatus from '../DateStatus';
import MissionStatusControl from '../MissionStatusControl';
import UnitsGroupStatusControl from '../UnitsGroupStatusControl';
import GroundTargetsStatusControl from '../GroundTargetsStatusControl';
import UnitStatusControl from '../UnitStatusControl';
// import MissionsControl from '../MissionsControl';
// import StatusControls from '../StatusControls';

const ViewOperation = () => {
  return (
    <ViewMap>
      <DateStatus position="topleft" />
      <WeatherStatus position="topleft" />
      <MissionStatusControl stylization="modal-theme" position="topleft" opened />
      <UnitsGroupStatusControl stylization="modal-theme" position="topleft" opened={false} />
      <GroundTargetsStatusControl stylization="modal-theme" position="topright" opened={false} />
      <UnitStatusControl stylization="modal-theme" position="topright" opened={false} />
      {/* <MissionsControl position="topleft" stylization="modal-theme" /> */}
      {/* <StatusControls position="topright" /> */}
    </ViewMap>
  );
};

export default ViewOperation;
