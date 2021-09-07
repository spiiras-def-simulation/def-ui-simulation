import React, { useContext } from 'react';
import { FeatureGroup } from 'react-leaflet';

import MarkerPosition from '../MarkerPosition';

import Context from '../ViewInputMission/context';

const InputMissionTargets = () => {
  const { state } = useContext(Context);

  const { targets } = state;
  return (
    <FeatureGroup>
      {targets.map(({ coordinates }) => (
        <MarkerPosition position={coordinates} options={{ color: 'black', size: 12 }} />
      ))}
    </FeatureGroup>
  );
};

export default InputMissionTargets;
