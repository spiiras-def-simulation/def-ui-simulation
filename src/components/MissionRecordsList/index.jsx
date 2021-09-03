import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import MissionRecord from '../MissionRecord';

import MissionStatus from '../ViewOperationConfirmation/MissionStatus';

import './index.css';

const groupsElementData = {
  ANALYSED: {
    title: 'Прошли целеполагание:'
  },
  LAUNCHED: {
    title: 'Запущена:'
  },
  FINISHED: {
    title: 'Завершены:'
  },
  REJECTED: {
    title: 'В запуске отказано:'
  }
};

const MissionRecordsList = ({ records, stylization, onChooseMission, subToUpdate }) => {
  useEffect(() => subToUpdate(), [subToUpdate]);

  const recordGroups = useMemo(
    () =>
      Object.keys(MissionStatus).map(status => {
        const { title = '' } = groupsElementData[status] || {};
        return { status, title, elements: records.filter(mission => mission.status === status) };
      }),
    [records]
  );

  return (
    <div className={classNames('mission-records-list', stylization)}>
      {recordGroups.map(
        ({ status, title, elements }) =>
          !!elements.length && (
            <div key={status} className="list-group">
              <div className="list-group-title">{title}</div>
              <div className="list-elements">
                {elements.map(mission => (
                  <MissionRecord
                    key={mission.id}
                    stylization="list-element"
                    mission={mission}
                    onShow={() => onChooseMission(mission.id)}
                  />
                ))}
              </div>
            </div>
          )
      )}
    </div>
  );
};

MissionRecordsList.propTypes = {
  records: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.string
    })
  ).isRequired,
  stylization: PropTypes.string,
  onChooseMission: PropTypes.func,
  subToUpdate: PropTypes.func
};

MissionRecordsList.defaultProps = {
  stylization: '',
  onChooseMission: () => {},
  subToUpdate: () => {}
};

export default MissionRecordsList;
