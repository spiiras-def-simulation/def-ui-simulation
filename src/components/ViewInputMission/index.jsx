import React, { useReducer } from 'react';

import ViewMap from '../ViewMap';
import ReturnViewControl from '../ReturnViewControl';
import InputMissionControl from '../InputMissionControl';
import DateStatus from '../DateStatus';

import Context from './context';
import reducer from './reducer';
import initialState from './initialState';
import InputMissionAreas from '../InputMissionAreas';

const ViewInputMission = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <ViewMap>
        <ReturnViewControl position="topleft" stylization="modal-theme" />
        <InputMissionControl position="topleft" stylization="modal-theme" />
        <DateStatus position="topright" />
        <InputMissionAreas />
      </ViewMap>
    </Context.Provider>
  );
};

export default ViewInputMission;
