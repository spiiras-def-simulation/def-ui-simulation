import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.css';

const missions = [
  { id: 1, name: 'Миссия 1', stage: 1, startTime: '12:00' },
  { id: 2, name: 'Миссия 2', stage: 1, startTime: '13:00' },
  { id: 3, name: 'Миссия 3', stage: 2, startTime: '14:00' },
  { id: 4, name: 'Миссия 4', startTime: '15:00' },
  { id: 5, name: 'Миссия 5', startTime: '16:00' }
];

const ShowMissionsList = ({ stylization, onClose }) => {
  return (
    <div className={classNames('show-missions-list', stylization)}>
      <div className="list-title">
        <span className="title">Список боевых задач</span>
        <button className="close-button" type="button" onClick={onClose}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
      </div>
      <div className="missions-list">
        {missions.map(({ id, name, stage, startTime }) => (
          <p key={id} className="mission-record">
            <span>
              {name}, {stage ? `этап ${stage}` : `начало в ${startTime}`}
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

ShowMissionsList.propTypes = {
  stylization: PropTypes.string,
  onClose: PropTypes.func
};

ShowMissionsList.defaultProps = {
  stylization: '',
  onClose: () => {}
};

export default ShowMissionsList;
