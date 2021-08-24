import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useQuery } from '@apollo/client';
import Control from 'react-leaflet-control';

import ControlPanel from '../ControlPanel';
import MissionRecord from '../MissionRecord';

import { GET_MISSIONS_LIST } from './requests';

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

const MissionsListControl = ({ stylization, position, onChooseMission }) => {
  const { data } = useQuery(GET_MISSIONS_LIST);

  const { missions = [] } = data || {};
  const missionGroups = useMemo(
    () =>
      Object.keys(MissionStatus).map(status => {
        const { title = '' } = groupsElementData[status] || {};
        return { status, title, elements: missions.filter(mission => mission.status === status) };
      }),
    [missions]
  );

  return (
    <Control position={position}>
      <ControlPanel
        stylization={classNames('missions-list-control', stylization)}
        title="Список доступных миссий"
        opened
      >
        <div className="control-content">
          <div className="missions-list">
            {missions.length &&
              missionGroups.map(({ status, title, elements }) => (
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
              ))}
          </div>
        </div>
      </ControlPanel>
    </Control>
  );
};

MissionsListControl.propTypes = {
  stylization: PropTypes.string,
  position: PropTypes.string,
  onChooseMission: PropTypes.func
};

MissionsListControl.defaultProps = {
  stylization: '',
  position: '',
  onChooseMission: () => {}
};

export default MissionsListControl;
