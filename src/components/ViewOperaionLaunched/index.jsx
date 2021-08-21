import React from 'react';
import { useQuery } from '@apollo/client';

import ViewMap from '../ViewMap';
import WeatherStatus from '../WeatherStatus';
import MissionStatusControl from '../MissionStatusControl';
import UnitsGroupStatusControl from '../UnitsGroupStatusControl';
import GroundTargetsStatusControl from '../GroundTargetsStatusControl';
// import UnitStatusControl from '../UnitStatusControl';
import MissionStatusLocations from '../MissionStatusLocations';
import UnitsGroupObjects from '../UnitsGroupObjects';

import { GET_LAUNCHED_MISSION } from './requests';

const ViewOperationLaunched = () => {
  const { data, loading, error } = useQuery(GET_LAUNCHED_MISSION);

  if (loading || error) return null;

  const { mission } = data;
  return (
    mission && (
      <ViewMap>
        <WeatherStatus position="topleft" />
        <MissionStatusControl stylization="modal-theme" position="topleft" opened />
        <UnitsGroupStatusControl stylization="modal-theme" position="topleft" opened={false} />
        <GroundTargetsStatusControl stylization="modal-theme" position="topright" opened={false} />
        {/* <UnitStatusControl stylization="modal-theme" position="topright" opened={false} /> */}
        <MissionStatusLocations id="175" />
        <UnitsGroupObjects id="175" />
      </ViewMap>
    )
  );
};

export default ViewOperationLaunched;
