import React from 'react';
import { useQuery } from '@apollo/client';

import ViewMap from '../ViewMap';
import MissionStatusControl from '../MissionStatusControl';
import UnitsGroupStatusControl from '../UnitsGroupStatusControl';
import DetectedTargetsStatusControl from '../DetectedTargetsStatusControl';
import MissionStatusLocations from '../MissionStatusLocations';
import UnitsGroupObjectsWithData from '../UnitsGroupObjectsWithData';
import UnitsGroupPath from '../UnitsGroupPath';
import DetectedTargetObjectsWithData from '../DetectedTargetObjectsWithData';

import { GET_LAUNCHED_MISSION } from './requests';

const ViewOperationLaunched = () => {
  const { data, loading, error } = useQuery(GET_LAUNCHED_MISSION);

  if (loading || error) return null;

  const { id } = data.mission;
  return (
    <ViewMap>
      <MissionStatusControl stylization="modal-theme" position="topleft" opened />
      <UnitsGroupStatusControl stylization="modal-theme" position="topleft" opened={false} />
      <DetectedTargetsStatusControl stylization="modal-theme" position="topright" opened={false} />
      <MissionStatusLocations id={id} />
      <UnitsGroupPath id={id} />
      <DetectedTargetObjectsWithData />
      <UnitsGroupObjectsWithData />
    </ViewMap>
  );
};

export default ViewOperationLaunched;
