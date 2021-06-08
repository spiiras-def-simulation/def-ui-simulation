import React from 'react';

import ViewMap from '../ViewMap';
import ReturnViewControl from '../ReturnViewControl';
import InputMissionControl from '../InputMissionControl';
import DateStatus from '../DateStatus';

const ViewInputMission = () => {
  return (
    <ViewMap>
      <ReturnViewControl position="topleft" stylization="modal-theme" />
      <InputMissionControl position="topleft" stylization="modal-theme" />
      <DateStatus position="topright" />
    </ViewMap>
  );
};

export default ViewInputMission;
