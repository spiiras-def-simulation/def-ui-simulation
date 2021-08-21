import React from 'react';
import { useQuery } from '@apollo/client';
import { FeatureGroup } from 'react-leaflet';

import MapObject from '../MapObject';

import { GET_COMBAT_AREAS } from './requests';

const CombatImpassableAreas = () => {
  const { data, loading, error } = useQuery(GET_COMBAT_AREAS, { variables: { type: 'ban' } });

  if (loading || error) return null;

  const { areas } = data;
  return (
    <FeatureGroup>
      {areas.map(({ id, coordinates }) => (
        <MapObject
          key={id}
          coordinates={JSON.parse(coordinates)}
          options={{ color: 'red' }}
          isLocal
        />
      ))}
    </FeatureGroup>
  );
};

export default CombatImpassableAreas;
