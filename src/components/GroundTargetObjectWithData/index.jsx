import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';

import GroundTargetObject from '../GroundTargetObject';

import { GET_TARGET_OBJECT, SUBSCRIBE_TARGET_POSITION } from './requests';

const GroundTargetObjectWithData = ({ id }) => {
  const { subscribeToMore, ...result } = useQuery(GET_TARGET_OBJECT, { variables: { id } });

  if (result.loading || result.error) return null;

  const { object } = result.data;
  return (
    <GroundTargetObject
      object={object}
      subToUpdate={() =>
        subscribeToMore({
          document: SUBSCRIBE_TARGET_POSITION,
          variables: { id },
          updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data) return prev;
            const { object: updated } = subscriptionData.data;
            return { object: { ...prev.object, coordinates: updated.coordinates } };
          }
        })
      }
    />
  );
};

GroundTargetObjectWithData.propTypes = {
  id: PropTypes.string.isRequired
};

export default GroundTargetObjectWithData;
