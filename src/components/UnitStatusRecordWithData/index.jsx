import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';

import UnitStatusRecord from '../UnitStatusRecord';

import { GET_UNIT_STATUS_RECORD, SUBCRIBE_CHANGE_UNIT_STATUS } from './requests';

const UnitStatusRecordWithData = ({ id, stylization }) => {
  const { subscribeToMore, ...result } = useQuery(GET_UNIT_STATUS_RECORD, { variables: { id } });

  if (result.loading) return 'Загружается...';
  if (result.error) return 'Ошибка загрузки';

  const { unit } = result.data;
  return (
    <UnitStatusRecord
      record={{
        id: unit.id,
        status: unit.status,
        role: unit.role && unit.role.name,
        type: unit.type && unit.type.name
      }}
      stylization={stylization}
      subToUpdate={() =>
        subscribeToMore({
          document: SUBCRIBE_CHANGE_UNIT_STATUS,
          variables: { id },
          updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data) return prev;
            const { unit: updated } = subscriptionData.data;
            return { unit: { ...prev.unit, ...updated } };
          }
        })
      }
    />
  );
};

UnitStatusRecordWithData.propTypes = {
  id: PropTypes.string.isRequired,
  stylization: PropTypes.string
};

UnitStatusRecordWithData.defaultProps = {
  stylization: ''
};

export default UnitStatusRecordWithData;
