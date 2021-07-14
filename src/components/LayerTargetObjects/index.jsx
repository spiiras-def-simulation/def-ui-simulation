import React from 'react';
import { useQuery } from '@apollo/client';
import { FeatureGroup } from 'react-leaflet';

import TargetObject from '../TargetObject';

import { GET_TARGET_OBJECTS } from './requests';

const LayerTargetObjects = () => {
  const { data, loading, error } = useQuery(GET_TARGET_OBJECTS);

  if (loading || error) return null;

  const { objects } = data;

  return (
    <FeatureGroup>
      {objects.map(({ id }) => (
        <TargetObject key={id} id={id} />
      ))}
    </FeatureGroup>
  );
};

export default LayerTargetObjects;
