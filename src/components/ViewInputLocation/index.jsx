import React, { useReducer } from 'react';

import ViewMap from '../ViewMap';
import ReturnViewControl from '../ReturnViewControl';
import InputLocationControl from '../InputLocationControl';
import InputLocationAreas from '../InputLocationAreas';
import CombatLocations from '../CombatLocations';

import Context from './context';
import reducer from './reducer';
import initialState from './initialState';

const ViewInputLocation = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <ViewMap>
        <ReturnViewControl position="topleft" stylization="modal-theme" />
        <InputLocationControl position="topleft" stylization="modal-theme" />
        <InputLocationAreas />
        <CombatLocations />
      </ViewMap>
    </Context.Provider>
  );
};

export default ViewInputLocation;
