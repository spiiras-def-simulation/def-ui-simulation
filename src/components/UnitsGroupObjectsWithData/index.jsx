import React from 'react';
import { useQuery } from '@apollo/client';

import { GET_UNITS_GROUP_OBJECTS, SUBSCRIBE_CHANGE_UNITS_STATUS } from './requests';

import UnitsGroupObjects from '../UnitsGroupObjects';

const UnitsGroupObjectsWithData = () => {
  const { subscribeToMore, ...result } = useQuery(GET_UNITS_GROUP_OBJECTS);

  if (result.loading || result.error) return null;

  const { units = [] } = result.data.mission || {};
  return (
    <UnitsGroupObjects
      objects={units}
      subToUpdate={() =>
        subscribeToMore({
          document: SUBSCRIBE_CHANGE_UNITS_STATUS,
          updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data) return prev;
            const { units: updates } = subscriptionData.data;
            const updatedMissionUnits = units.map(unit => {
              const newUnitData = updates.find(updated => unit.id === updated.id);
              return { ...unit, ...newUnitData };
            });
            return { object: { ...prev.object, units: [...updatedMissionUnits] } };
          }
        })
      }
    />
  );
};

export default UnitsGroupObjectsWithData;
