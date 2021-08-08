import React, { useContext } from 'react';
import { FeatureGroup } from 'react-leaflet';

import MarkerPosition from '../MarkerPosition';

import Context from '../ViewInputMission/context';
import Types from '../ViewInputMission/LocationTypes';

const InputMissionLocations = () => {
  const { state } = useContext(Context);

  const { locations } = state;
  return (
    <FeatureGroup>
      {locations[Types.DUMP_AMMO_POINT] && (
        <MarkerPosition position={locations[Types.DUMP_AMMO_POINT]} options={{ color: 'green' }} />
      )}
      {locations[Types.DEPARTURE_POINT] && (
        <MarkerPosition position={locations[Types.DEPARTURE_POINT]} options={{ color: 'blue' }} />
      )}
      {locations[Types.LANDING_POINT] && (
        <MarkerPosition position={locations[Types.LANDING_POINT]} options={{ color: 'red' }} />
      )}
    </FeatureGroup>
  );
};

export default InputMissionLocations;
