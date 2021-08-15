import React, { useReducer, useCallback } from 'react';

import ViewMap from '../ViewMap';
import ReturnViewControl from '../ReturnViewControl';
import InputMissionControl from '../InputMissionControl';
// import DateStatus from '../DateStatus';

import Context from './context';
import reducer from './reducer';
import events from './events';
import initialState from './initialState';
import InputMissionAreas from '../InputMissionAreas';
import InputMissionLocations from '../InputMissionLocations';

const ViewInputMission = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { mapPointMode } = state;

  const handleSetMapPoint = useCallback(
    e => {
      if (mapPointMode) {
        dispatch({
          type: events.SET_MAP_POINT,
          data: {
            x: e.latlng.lat,
            y: e.latlng.lng
          }
        });
      }
    },
    [mapPointMode]
  );

  return (
    <Context.Provider value={{ state, dispatch }}>
      <ViewMap onClick={handleSetMapPoint}>
        <ReturnViewControl position="topleft" stylization="modal-theme" />
        <InputMissionControl position="topleft" stylization="modal-theme" />
        {/* <DateStatus position="topright" /> */}
        <InputMissionAreas />
        <InputMissionLocations />
      </ViewMap>
    </Context.Provider>
  );
};

export default ViewInputMission;
