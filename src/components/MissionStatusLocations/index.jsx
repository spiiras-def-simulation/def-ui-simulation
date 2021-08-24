import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import L from 'leaflet';
import { FeatureGroup, GeoJSON } from 'react-leaflet';

import MapContext from '../ViewMap/context';

import MarkerPosition from '../MarkerPosition';

import { GET_MISSION_LOCATIONS } from './requests';

const MissionStatusLocations = ({ id }) => {
  const { projection } = useContext(MapContext);
  const { data, error, loading } = useQuery(GET_MISSION_LOCATIONS, { variables: { id } });

  if (error || loading) return null;

  const { locations } = data;

  const areaLatLngs =
    locations && L.GeoJSON.coordsToLatLngs(locations.scoutingArea.geometry.coordinates[0]);
  const areaProj =
    areaLatLngs && areaLatLngs.map(({ lat, lng }) => projection.unproject({ x: lat, y: lng }));
  console.log(areaProj);

  const departureProj = locations && projection.unproject(locations.departurePoint);
  console.log(departureProj);
  const dumpProj = locations && projection.unproject(locations.dumpAmmoPoint);
  console.log(dumpProj);
  const landingProj = locations && projection.unproject(locations.landingPoint);
  console.log(landingProj);

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
        {locations.scoutingArea && (
          <GeoJSON data={locations.scoutingArea} style={{ color: 'red' }} />
        )}
      </FeatureGroup>
    )
  );
};

MissionStatusLocations.propTypes = {
  id: PropTypes.string.isRequired
};

export default MissionStatusLocations;
