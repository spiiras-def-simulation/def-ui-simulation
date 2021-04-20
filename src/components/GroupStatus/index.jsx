import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.css';

const mission = { name: 'Миссия 1', stage: 3 };
const groupType = 'мультироторные';
const vehicles = [
  { id: 102, role: 'разведывательный', status: 'active' },
  { id: 103, role: 'ударный', status: 'active' },
  { id: 104, role: 'ударный', status: 'active' },
  { id: 105, role: 'ударный', status: 'active' },
  { id: 106, role: 'ударный', status: 'active' }
];

const GroupStatus = ({ stylization }) => {
  const { name: missionName, stage: missionStage } = mission;
  return (
    <div className={classNames('group-status', stylization)}>
      <p className="group-title">
        <span className="title">Информация о группе</span>
        <i className="fa fa-times close-button" aria-hidden="true"></i>
      </p>
      <div className="group-description">
        <p>
          <span>
            Задача: {missionName}, этап {missionStage}
          </span>
          <button type="button" className="show-button">
            Показать
          </button>
        </p>
        <p>Тип устройств: {groupType}</p>
      </div>
      <div className="group-vehicles">
        {vehicles
          .map((vehicle, order) => ({ order: order + 1, ...vehicle }))
          .map(({ order, id, role, status }) => (
            <p key={order} className="vehicle-record">
              <span>
                {order}. ID {id}, {role} {status === 'active' ? '+' : '-'}
              </span>
              <button type="button" className="show-button">
                Показать
              </button>
            </p>
          ))}
      </div>
    </div>
  );
};

GroupStatus.propTypes = {
  stylization: PropTypes.string
};

GroupStatus.defaultProps = {
  stylization: ''
};

export default GroupStatus;
