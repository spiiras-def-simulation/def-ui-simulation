import React from 'react';
import { useQuery } from '@apollo/client';
import { FeatureGroup } from 'react-leaflet';

import MarkerPosition from '../MarkerPosition';

import { GET_MISSION_LOCATIONS } from './requests';

const MissionStatusLocations = () => {
  const { data, error, loading } = useQuery(GET_MISSION_LOCATIONS, { variables: { id: '175' } });

  if (error || loading) return null;

  const { locations } = data;
  return (
    locations && (
      <FeatureGroup>
        {locations.departurePoint && (
          <MarkerPosition
            number="1"
            position={locations.departurePoint}
            options={{ color: 'blue' }}
          />
        )}
        {locations.dumpAmmoPoint && (
          <MarkerPosition
            number="2"
            position={locations.dumpAmmoPoint}
            options={{ color: 'green' }}
          />
        )}
        {locations.landingPoint && (
          <MarkerPosition number="3" position={locations.landingPoint} options={{ color: 'red' }} />
        )}
      </FeatureGroup>
    )
  );
};

export default MissionStatusLocations;
