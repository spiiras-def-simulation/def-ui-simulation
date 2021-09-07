import React, { useState } from 'react';

import ViewMap from '../ViewMap';
import MissionsListControl from '../MissionsListControl';
import MissionConfirmControl from '../MissionConfirmControl';
import ReMissionControl from '../ReMissionControl';
import MissionStatusLocations from '../MissionStatusLocations';
import UnitsGroupPath from '../UnitsGroupPath';
// import CombatLocations from '../CombatLocations';

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
      {mission && <UnitsGroupPath id={mission} />}
      {/* <CombatLocations /> */}
    </ViewMap>
  );
};

export default ViewOperationСonfirmation;
