import React, { useReducer, useCallback } from 'react';

import ViewMap from '../ViewMap';
import ReturnViewControl from '../ReturnViewControl';
import DateStatus from '../DateStatus';
import InputGroundTargetsForm from '../InputGroundTargetsForm';
import MarkerPosition from '../MarkerPosition';

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

  return (
    <Context.Provider value={{ state, dispatch }}>
      <ViewMap onClick={handleSetMapPoint}>
        <ReturnViewControl position="topleft" stylization="modal-theme" />
        <InputGroundTargetsForm position="topleft" stylization="modal-theme" />
        <DateStatus position="topright" />
        {values.location && (
          <MarkerPosition position={values.location} options={{ color: 'green' }} />
        )}
        {values.target && <MarkerPosition position={values.target} options={{ color: 'red' }} />}
      </ViewMap>
    </Context.Provider>
  );
};

export default ViewInputGroundTargets;
