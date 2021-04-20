import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.css';

const stages = [
  {
    name: 'Взлёт',
    done: true,
    time: '10:42'
  },
  {
    name: 'Передвижение',
    done: false
  },
  { name: 'Устранение целей' },
  { name: 'Сброс полезной нагрузки' },
  { name: 'Возврат' },
  { name: 'Посадка' }
];

const MissionStatus = ({ stylization }) => (
  <div className={classNames('mission-status', stylization)}>
    <p className="mission-title">
      <span className="title">Миссия 1</span>
      <span className="show-button">Показать группу</span>
      <i className="fa fa-times close-button" aria-hidden="true"></i>
    </p>
    <p className="content-row">Начало 10:00, выполняется этап 3</p>
    <div className="mission-stages">
      {stages
        .map((stage, order) => ({ order: order + 1, ...stage }))
        .map(({ order, name, done, time }) => (
          <p key={order} className="stage-row">
            <span>{done ? `${order}. ${name}, ${time}"` : `${order}. ${name}`}</span>
            <button type="button" className="show-button">
              Показать
            </button>
          </p>
        ))}
    </div>
  </div>
);

MissionStatus.propTypes = {
  stylization: PropTypes.string
};

MissionStatus.defaultProps = {
  stylization: ''
};

export default MissionStatus;
