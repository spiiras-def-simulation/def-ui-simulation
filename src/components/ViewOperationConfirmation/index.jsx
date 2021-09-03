import React, { useState } from 'react';

import ViewMap from '../ViewMap';
import MissionsListControl from '../MissionsListControl';
import MissionConfirmControl from '../MissionConfirmControl';
import MissionStatusLocations from '../MissionStatusLocations';
import ReMissionControl from '../ReMissionControl';

const ViewOperationСonfirmation = () => {
  const [mission, setMission] = useState(null);

  return (
    <ViewMap>
      <MissionsListControl
        position="topleft"
        stylization="modal-theme"
        onChooseMission={id => setMission(id)}
      />
      {mission && (
        <MissionConfirmControl
          id={mission}
          position="topright"
          stylization="modal-theme"
          onClose={() => setMission(null)}
        />
      )}
      {mission && <ReMissionControl id={mission} position="topright" stylization="modal-theme" />}
      {mission && <MissionStatusLocations id={mission} />}
    </ViewMap>
  );
};

export default ViewOperationСonfirmation;
