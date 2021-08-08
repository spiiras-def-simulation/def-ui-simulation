import React, { useReducer, useCallback } from 'react';

import ViewMap from '../ViewMap';
import ReturnViewControl from '../ReturnViewControl';
import DateStatus from '../DateStatus';
import InputUnitsForm from '../InputUnitsForm';
import MarkerPosition from '../MarkerPosition';

import Context from './context';
import { initialState, events, reducer } from './reducer';

const ViewInputGroundTargets = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { isSetPoint, values } = state;

  const handleSetMapPoint = useCallback(
    e => {
      if (isSetPoint) {
        dispatch({
          type: events.SET_FORM_VALUE,
          name: 'location',
          value: {
            x: e.latlng.lat,
            y: e.latlng.lng
          }
        });
      }
    },
    [isSetPoint]
  );

  const { location = null } = values;
  return (
    <Context.Provider value={{ state, dispatch }}>
      <ViewMap onClick={handleSetMapPoint}>
        <ReturnViewControl position="topleft" stylization="modal-theme" />
        <InputUnitsForm position="topleft" stylization="modal-theme" />
        <DateStatus position="topright" />
        {location && <MarkerPosition position={values.location} options={{ color: 'green' }} />}
      </ViewMap>
    </Context.Provider>
  );
};

export default ViewInputGroundTargets;
