import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import { FeatureGroup } from 'react-leaflet';

import MarkerPosition from '../MarkerPosition';
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
          <MarkerPosition
            number="3"
            position={locations.landingPoint}
            options={{ color: 'blue' }}
          />
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
