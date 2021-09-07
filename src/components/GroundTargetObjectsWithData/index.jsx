import React from 'react';
import { useQuery } from '@apollo/client';

import GroundTargetObjects from '../GroundTargetObjects';

import { GET_TARGETS_OBJECTS, SUBSCRIBE_CHANGE_TARGETS_STATUS } from './requests';

const GroundTargetObjectsWithData = () => {
  const { subscribeToMore, ...result } = useQuery(GET_TARGETS_OBJECTS);

  if (result.loading || result.error) return null;

  const { objects } = result.data;
  return (
    <GroundTargetObjects
      // objects={objects.filter(({ status }) => status === 'LAUNCHED' || status === 'DETECTED')}
      objects={objects}
      subToUpdate={() =>
        subscribeToMore({
          document: SUBSCRIBE_CHANGE_TARGETS_STATUS,
          updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data) return prev;
            const { objects: updates } = subscriptionData.data;
            const nextObjects = prev.objects.map(object => {
              const updated = updates.find(({ id }) => object.id === id);
              return updated ? { ...object, status: updated.status } : object;
            });
            return { objects: nextObjects };
          }
        })
      }
    />
  );
};

export default GroundTargetObjectsWithData;
