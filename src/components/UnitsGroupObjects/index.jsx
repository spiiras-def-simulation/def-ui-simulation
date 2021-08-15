import React from 'react';
import { useQuery } from '@apollo/client';
import { FeatureGroup } from 'react-leaflet';

import UnitScoutObjectWithData from '../UnitScoutObjectWithData';
// import UnitStrikeObjectWithData from '../UnitStrikeObjectWithData';

import { GET_UNITS_GROUP_OBJECTS } from './requests';

const UnitsGroupObjects = () => {
  const { data, error, loading } = useQuery(GET_UNITS_GROUP_OBJECTS, {
    variables: { missionId: '175' }
  });

  if (error || loading) return null;

  const { mission } = data;
  return (
    mission && (
      <FeatureGroup>
        {mission.units
          .filter(unit => unit.role && unit.role.name === 'Разведчик')
          .map(({ id }) => (
            <UnitScoutObjectWithData key={id} id={id} />
          ))}
        {/* {mission.units
          .filter(unit => unit.role && unit.role.name === 'Ударный')
          .map(({ id }) => (
            <UnitStrikeObjectWithData key={id} id={id} />
          ))} */}
      </FeatureGroup>
    )
  );
};

export default UnitsGroupObjects;
