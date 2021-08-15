import React, { useReducer, useCallback } from 'react';

import ViewMap from '../ViewMap';
import ReturnViewControl from '../ReturnViewControl';
// import DateStatus from '../DateStatus';
import InputGroundTargetsForm from '../InputGroundTargetsForm';
import MarkerPosition from '../MarkerPosition';
import GroundTargetObjectsLayer from '../GroundTargetObjectsLayer';

import Context from './context';
import { initialState, events, reducer } from './reducer';

const ViewInputGroundTargets = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { mapPointStatus, values } = state;

  const handleSetMapPoint = useCallback(
    e => {
      if (mapPointStatus) {
        dispatch({
          type: events.SET_FORM_VALUE,
          name: mapPointStatus,
          value: {
            x: e.latlng.lat,
            y: e.latlng.lng
          }
        });
      }
    },
    [mapPointStatus]
  );

  const { location = null, target = null } = values;
  return (
    <Context.Provider value={{ state, dispatch }}>
      <ViewMap onClick={handleSetMapPoint}>
        <ReturnViewControl position="topleft" stylization="modal-theme" />
        <InputGroundTargetsForm position="topleft" stylization="modal-theme" />
        {/* <DateStatus position="topright" /> */}
        {location && <MarkerPosition position={location} options={{ color: 'green' }} />}
        {target && <MarkerPosition position={target} options={{ color: 'red' }} />}
        <GroundTargetObjectsLayer />
      </ViewMap>
    </Context.Provider>
  );
};

export default ViewInputGroundTargets;
