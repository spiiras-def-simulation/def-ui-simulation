import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import { FeatureGroup } from 'react-leaflet';

import MarkerKeyPoint from '../MarkerKeyPoint';
import AreaObject from '../AreaObject';

import { GET_MISSION_LOCATIONS } from './requests';

const MissionStatusLocations = ({ id }) => {
  const { data, error, loading } = useQuery(GET_MISSION_LOCATIONS, { variables: { id } });

  if (error || loading) return null;

  const { locations } = data;
  return (
    locations && (
      <FeatureGroup>
        {locations.departurePoint && (
          <MarkerKeyPoint position={locations.departurePoint} options={{ color: 'green' }} />
        )}
        {locations.dumpAmmoPoint && (
          <MarkerKeyPoint position={locations.dumpAmmoPoint} options={{ color: 'blue' }} />
        )}
        {locations.landingPoint && (
          <MarkerKeyPoint position={locations.landingPoint} options={{ color: 'red' }} />
        )}
        {locations.scoutingArea && (
          <AreaObject id={id} data={locations.scoutingArea} color="red" fill={false} />
        )}
      </FeatureGroup>
    )
  );
};

MissionStatusLocations.propTypes = {
  id: PropTypes.string.isRequired
};

export default MissionStatusLocations;
