import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';

import GroundTargetRecord from '../GroundTargetRecord';

import { GET_TARGET_OBJECT, SUBSCRIBE_TARGET_OBJECT } from './requests';

const GroundTargetRecordWithData = ({ id, stylization }) => {
  const { subscribeToMore, ...result } = useQuery(GET_TARGET_OBJECT, { variables: { id } });

  if (result.loading || result.error) return null;

  const { object } = result.data;
  return (
    <GroundTargetRecord
      stylization={stylization}
      object={object}
      subToUpdate={() =>
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
        })
      }
    />
  );
};

GroundTargetRecordWithData.propTypes = {
  id: PropTypes.string.isRequired,
  stylization: PropTypes.string
};

GroundTargetRecordWithData.defaultProps = {
  stylization: ''
};

export default GroundTargetRecordWithData;
