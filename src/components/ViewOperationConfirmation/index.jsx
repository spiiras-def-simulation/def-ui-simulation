import React, { useState } from 'react';

import ViewMap from '../ViewMap';
import WeatherStatus from '../WeatherStatus';
import MissionsListControl from '../MissionsListControl';
import MissionConfirmControl from '../MissionConfirmControl';
import MissionStatusLocations from '../MissionStatusLocations';

const ViewOperationСonfirmation = () => {
  const [mission, setMission] = useState(null);

  return (
    <ViewMap>
      <WeatherStatus position="topleft" />
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
      {mission && <MissionStatusLocations id={mission} />}
    </ViewMap>
  );
};

export default ViewOperationСonfirmation;
