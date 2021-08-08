import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';

import GroundTargetRecord from '../GroundTargetRecord';

import { GET_COMBAT_UNIT } from './requests';

const GroundTargetRecordLoaded = ({ id, stylization }) => {
  const { subscribeToMore, ...result } = useQuery(GET_TARGET_OBJECT, { variables: { id } });

  if (result.loading || result.error) return null;

  const { object } = result.data;
  return (
    <GroundTargetRecord
      stylization={stylization}
      data={object}
      subToUpdate={() => {
        subscribeToMore({
          document: SUBSCRIBE_TARGET_OBJECT,
          variables: { id },
          updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data) return prev;
            const { object: updated } = subscriptionData.data;
            return {
              object: { ...prev.object, coordinates: updated.coordinates }
            };
          }
        });
      }}
    />
  );
};

GroundTargetRecordLoaded.propTypes = {
  id: PropTypes.string.isRequired,
  stylization: PropTypes.string
};

GroundTargetRecordLoaded.defaultProps = {
  stylization: ''
};

export default GroundTargetRecordLoaded;
