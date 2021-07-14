import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.css';

const units = [
  { id: 102, type: 'мультироторный', role: 'разведчик', status: 'active' },
  { id: 103, type: 'мультироторный', role: 'ударный', status: 'active' },
  { id: 104, type: 'самолёт', role: 'ударный', status: 'active' },
  { id: 105, type: 'самолёт', role: 'ударный', status: 'active' },
  { id: 106, type: 'мультироторный', role: 'ударный', status: 'active' }
];

const ShowUnitsList = ({ stylization, onClose }) => {
  return (
    <div className={classNames('show-units-list', stylization)}>
      <div className="list-title">
        <span className="title">Список добавленных БпЛА</span>
        <button className="close-button" type="button" onClick={onClose}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
      </div>
      <div className="units-list">
        {units
          .map((unit, order) => ({ order: order + 1, ...unit }))
          .map(({ order, id, role }) => (
            <p key={order} className="unit-record">
              <span>
                {order}. ID {id}, {role}
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

ShowUnitsList.propTypes = {
  stylization: PropTypes.string,
  onClose: PropTypes.func
};

ShowUnitsList.defaultProps = {
  stylization: '',
  onClose: () => {}
};

export default ShowUnitsList;
