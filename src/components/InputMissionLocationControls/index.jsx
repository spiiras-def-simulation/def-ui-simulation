import React, { useContext, useCallback } from 'react';

import LocationFormField from '../LocationFormField';

import Context from '../ViewInputMission/context';
import events from '../ViewInputMission/events';
import LocationTypes from '../ViewInputMission/LocationTypes';

import './index.css';

const InputMissionLocationControls = () => {
  const { state, dispatch } = useContext(Context);

  const { mapPointMode, locations } = state;

  const handleSetMapPointMode = useCallback(
    mode => {
      dispatch({ type: events.SET_MAP_POINT_MODE, data: mapPointMode !== mode ? mode : null });
    },
    [mapPointMode, dispatch]
  );

  return (
    <div className="input-mission-location-controls">
      <div className="location-control-block">
        <p>Точка сброса груза:</p>
        <LocationFormField
          stylization="location-control"
          value={locations[LocationTypes.DUMP_AMMO_POINT]}
          status={LocationTypes.DUMP_AMMO_POINT === mapPointMode}
          onChangeStatus={() => handleSetMapPointMode(LocationTypes.DUMP_AMMO_POINT)}
        />
      </div>
      <div className="location-control-block">
        <p>Точка взлёта:</p>
        <LocationFormField
          value={locations[LocationTypes.DEPARTURE_POINT]}
          status={LocationTypes.DEPARTURE_POINT === mapPointMode}
          onChangeStatus={() => handleSetMapPointMode(LocationTypes.DEPARTURE_POINT)}
        />
      </div>
      <div className="location-control-block">
        <p>Точка приземления:</p>
        <LocationFormField
          stylization="location-control"
          value={locations[LocationTypes.LANDING_POINT]}
          status={LocationTypes.LANDING_POINT === mapPointMode}
          onChangeStatus={() => handleSetMapPointMode(LocationTypes.LANDING_POINT)}
        />
      </div>
    </div>
  );
};

export default InputMissionLocationControls;
