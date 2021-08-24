import React from 'react';
import { useQuery } from '@apollo/client';

import ViewMap from '../ViewMap';
import WeatherStatus from '../WeatherStatus';
import MissionStatusControl from '../MissionStatusControl';
import UnitsGroupStatusControl from '../UnitsGroupStatusControl';
import DetectedTargetsStatusControl from '../DetectedTargetsStatusControl';
import MissionStatusLocations from '../MissionStatusLocations';
import UnitsGroupObjects from '../UnitsGroupObjects';
import DetectedTargetObjectsWithData from '../DetectedTargetObjectsWithData';

import { GET_LAUNCHED_MISSION } from './requests';

const ViewOperationLaunched = () => {
  const { data, loading, error } = useQuery(GET_LAUNCHED_MISSION);

  if (loading || error) return null;

  const { id } = data.mission;
  return (
    <ViewMap>
      <WeatherStatus position="topleft" />
      <MissionStatusControl stylization="modal-theme" position="topleft" opened />
      <UnitsGroupStatusControl stylization="modal-theme" position="topleft" opened={false} />
      <DetectedTargetsStatusControl stylization="modal-theme" position="topright" opened={false} />
      <MissionStatusLocations id={id} />
      <UnitsGroupObjects id={id} />
      <DetectedTargetObjectsWithData />
    </ViewMap>
  );
};

export default ViewOperationLaunched;
