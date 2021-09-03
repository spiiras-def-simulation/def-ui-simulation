import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';

import MissionRecordsList from '../MissionRecordsList';

import { GET_MISSIONS_LIST, SUBSCRIBE_CHANGE_MISSIONS_STATUS } from './requests';

const MissionRecordsListWithData = ({ stylization, onChooseMission }) => {
  const { subscribeToMore, ...result } = useQuery(GET_MISSIONS_LIST);

  if (result.loading) return 'Загружается...';
  if (result.error) return 'Ошибка загрузки';

  const { missions = [] } = result.data || {};
  return (
    result.data &&
    (missions.length ? (
      <MissionRecordsList
        records={missions}
        stylization={stylization}
        onChooseMission={onChooseMission}
        subToUpdate={() =>
          subscribeToMore({
            document: SUBSCRIBE_CHANGE_MISSIONS_STATUS,
            updateQuery: (prev, { subscriptionData }) => {
              if (!subscriptionData.data) return prev;
              const { missions: updated } = subscriptionData.data;
              return {
                missions: updated.map(({ status }, i) => ({
                  ...missions[i],
                  status
                }))
              };
            }
          })
        }
      />
    ) : (
      'Миссии не найдены'
    ))
  );
};

MissionRecordsListWithData.propTypes = {
  stylization: PropTypes.string,
  onChooseMission: PropTypes.func
};

MissionRecordsListWithData.defaultProps = {
  stylization: '',
  onChooseMission: () => {}
};

export default MissionRecordsListWithData;
