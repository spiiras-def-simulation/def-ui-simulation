import React from 'react';
import { useQuery } from '@apollo/client';

import { GET_TARGET_OBJECTS, SUBSCRIBE_CHANGE_TARGET_OBJECTS } from './requests';

import DetectedTargetObjects from '../DetectedTargetObjects';

const DetectedTargetObjectsWithData = () => {
  const { subscribeToMore, ...result } = useQuery(GET_TARGET_OBJECTS);

  if (result.loading || result.error) return null;

  const { objects } = result.data;
  return (
    <DetectedTargetObjects
      objects={objects.filter(({ status }) => status === 'DETECTED')}
      subToUpdate={() => {
        subscribeToMore({
          document: SUBSCRIBE_CHANGE_TARGET_OBJECTS,
          updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data) return prev;
            const { objects: updated } = subscriptionData.data;
            return { objects: updated.filter(({ status }) => status === 'DETECTED') };
          }
        });
      }}
    />
  );
};

export default DetectedTargetObjectsWithData;
