import React from 'react';
import { useQuery } from '@apollo/client';
import { FeatureGroup } from 'react-leaflet';

import MapObject from '../MapObject';

import { GET_COMBAT_AREAS } from './requests';

const CombatJammingArea = () => {
  const { data, loading, error } = useQuery(GET_COMBAT_AREAS, { variables: { type: 'rep' } });

  if (loading || error) return null;

  const { areas } = data;
  return (
    <FeatureGroup>
      {areas.map(({ id, coordinates }) => (
        <MapObject key={id} coordinates={coordinates} options={{ color: 'blue' }} />
      ))}
    </FeatureGroup>
  );
};

export default CombatJammingArea;
