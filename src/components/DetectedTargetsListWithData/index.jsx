import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';

import { GET_TARGET_OBJECTS, SUBSCRIBE_CHANGE_TARGET_OBJECTS } from './requests';

import DetectedTargetsList from '../DetectedTargetsList';

const DetectedTargetsListWithData = ({ stylization }) => {
  const { subscribeToMore, ...result } = useQuery(GET_TARGET_OBJECTS);

  if (result.loading || result.error) return null;

  const { objects } = result.data;
  return (
    <DetectedTargetsList
      objects={objects.filter(({ status }) => status === 'DETECTED')}
      stylization={stylization}
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

DetectedTargetsListWithData.propTypes = {
  stylization: PropTypes.string
};

DetectedTargetsListWithData.defaultProps = {
  stylization: ''
};

export default DetectedTargetsListWithData;
