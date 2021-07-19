import React from 'react';
import { useQuery, useSubscription } from '@apollo/client';
import { FeatureGroup } from 'react-leaflet';

import GroundTargetObject from '../GroundTargetObject';

import { GET_TARGET_OBJECTS, SUBSCRIBE_UPDATE_TARGETS_OBJECTS } from './requests';

const GroundTargetObjectsLayer = () => {
  const { data: initialData } = useQuery(GET_TARGET_OBJECTS);
  const { data } = useSubscription(SUBSCRIBE_UPDATE_TARGETS_OBJECTS);

  const { objects = [] } = data || initialData || {};
  return (
    <FeatureGroup>
      {objects.map(({ id }) => (
        <GroundTargetObject key={id} id={id} />
      ))}
    </FeatureGroup>
  );
};

export default GroundTargetObjectsLayer;
