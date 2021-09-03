import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useQuery } from '@apollo/client';
import Control from 'react-leaflet-control';

import ControlPanel from '../ControlPanel';

import { GET_MISSION_STATUS } from './requests';

import './index.css';

const dataFields = [
  {
    title: 'Макс. время на выполнение (с):',
    type: 'number',
    name: 'directiveTime',
    placeholder: 'Неизвестно'
  },
  {
    title: 'Гарантир. уровень выполнения ЦЗ:',
    type: 'number',
    name: 'successLevel',
    placeholder: 'Неизвестно'
  }
];

const MissionStatusControl = ({ stylization, position, opened }) => {
  const { data } = useQuery(GET_MISSION_STATUS);

  const { mission = null } = data || {};
  return (
    <Control position={position}>
      <ControlPanel
        stylization={classNames('mission-status-control', stylization)}
        title="Информация о боевой задаче"
        opened={opened}
      >
        <div className="status-description">
          <ul className="status-list">
            {dataFields.map(({ title, type, name, placeholder }) => (
              <li key={name} className="status-element">
                <p>{title}</p>
                <input
                  type={type}
                  name={name}
                  disabled
                  value={mission && mission[name] !== null ? mission[name] : ''}
                  placeholder={placeholder}
                />
              </li>
            ))}
          </ul>
        </div>
      </ControlPanel>
    </Control>
  );
};

MissionStatusControl.propTypes = {
  stylization: PropTypes.string,
  position: PropTypes.string,
  opened: PropTypes.bool
};

MissionStatusControl.defaultProps = {
  stylization: '',
  position: '',
  opened: false
};

export default MissionStatusControl;
