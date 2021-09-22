import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';

import UnitTimeLeft from '../UnitTimeLeft';

import { GET_COMBAT_UNIT, SUBSCRIBE_UNIT_TIME_LEFT } from './requests';

const UnitTimeLeftWithData = ({ id }) => {
  const { subscribeToMore, ...result } = useQuery(GET_COMBAT_UNIT, { variables: { id } });

  if (result.loading || result.error) return 'Ост. время неизвестно';

  const { timeLeft = null } = (result.data && result.data.unit) || {};
  return (
    <UnitTimeLeft
      timeLeft={timeLeft}
      subToUpdate={() => {
        subscribeToMore({
          document: SUBSCRIBE_UNIT_TIME_LEFT,
          variables: { id },
          updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data) return prev;
            const { unit: updated } = subscriptionData.data;
            return { unit: { ...prev.unit, timeLeft: updated.timeLeft } };
          }
        });
      }}
    />
  );
};

UnitTimeLeftWithData.propTypes = {
  id: PropTypes.string.isRequired
};

export default UnitTimeLeftWithData;
