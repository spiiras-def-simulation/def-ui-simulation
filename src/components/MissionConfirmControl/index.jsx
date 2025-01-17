import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useQuery, useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import Control from 'react-leaflet-control';

import UnitStatusRecordWithData from '../UnitStatusRecordWithData';
import PrimaryButton from '../PrimaryButton';

import MissionStatus from '../ViewOperationConfirmation/MissionStatus';

import { GET_MISSION_STATUS, CONFIRM_MISSION } from './requests';

import './index.css';

const dataFields = [
  {
    title: 'Макс. время на выполнение (с):',
    type: 'number',
    name: 'directiveTime',
    placeholder: 'Неизвестно'
  },
  {
    title: 'Гарантир. уровень выполнения ЦЗ (%):',
    type: 'number',
    name: 'successLevel',
    placeholder: 'Неизвестно'
  },
  {
    title: 'Результат целеполагания:',
    type: 'text',
    name: 'accomplished',
    placeholder: 'Неизвестно'
  }
];

const MissionConfirmControl = ({ id, position, stylization, onClose }) => {
  const { data } = useQuery(GET_MISSION_STATUS, { variables: { id } });
  const [confirmMission] = useMutation(CONFIRM_MISSION, { variables: { id } });

  const { mission = null } = data || {};
  return (
    <Control position={position}>
      <div className={classNames('mission-confirm-control', stylization)}>
        <div className="control-title">
          <span className="title">Информация о выбранной миссии</span>
          <button className="close-button" type="button" onClick={onClose}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
        {mission && (
          <div className="control-content">
            <ul className="status-list">
              {dataFields.map(({ title, type, name, placeholder }) =>
                name === 'accomplished' ? (
                  mission.status !== MissionStatus.REGISTRED && (
                    <li key={name} className="status-element">
                      <p>{title}</p>
                      <input
                        type={type}
                        name={name}
                        disabled
                        value={mission && mission[name] ? 'Миссия выполнима' : 'Миссия невыполнима'}
                        placeholder={placeholder}
                      />
                    </li>
                  )
                ) : (
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
                )
              )}
            </ul>
            <div className="units-group">
              <div className="units-group-title">Боевая группа:</div>
              <div className="unit-group-records">
                {mission.units.map(({ id: unitId }) => (
                  <UnitStatusRecordWithData
                    key={unitId}
                    id={unitId}
                    stylization="unit-group-record"
                  />
                ))}
              </div>
            </div>
            {mission.status === MissionStatus.ANALYSED && (
              <div className="confirm-buttons">
                <PrimaryButton stylization="confirm-button" onClick={confirmMission}>
                  Выполнить
                </PrimaryButton>
              </div>
            )}
            {mission.status === MissionStatus.LAUNCHED && (
              <div className="confirm-buttons">
                <PrimaryButton stylization="confirm-button">
                  <Link to="/operation" className="confirm-link-open">
                    <span>Открыть</span>
                  </Link>
                </PrimaryButton>
              </div>
            )}
          </div>
        )}
      </div>
    </Control>
  );
};

MissionConfirmControl.propTypes = {
  id: PropTypes.string.isRequired,
  position: PropTypes.string,
  stylization: PropTypes.string,
  onClose: PropTypes.func
};

MissionConfirmControl.defaultProps = {
  position: 'topleft',
  stylization: '',
  onClose: () => {}
};

export default MissionConfirmControl;
