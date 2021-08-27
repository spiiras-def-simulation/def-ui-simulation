import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';

import { GET_UNIT_ATTACK_POINTS, SUBSCRIBE_CHANGE_UNIT_STATUS } from './requests';

import UnitAttackPoints from '../UnitAttackPoints';

const UnitAttackPointsWithData = ({ id }) => {
  const { subscribeToMore, ...result } = useQuery(GET_UNIT_ATTACK_POINTS, { variables: { id } });

  if (result.loading || result.error) return null;

  const { unit } = result.data;
  return (
    <UnitAttackPoints
      unit={unit}
      subToUpdate={() => {
        subscribeToMore({
          document: SUBSCRIBE_CHANGE_UNIT_STATUS,
          variables: { id },
          updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data) return prev;
            const { unit: updated } = subscriptionData.data;
            return { object: { ...prev.object, ...updated } };
          }
        });
      }}
    />
  );
};

UnitAttackPointsWithData.propTypes = {
  id: PropTypes.string.isRequired
};

export default UnitAttackPointsWithData;
