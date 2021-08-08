import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useQuery } from '@apollo/client';

import UnitRecord from '../UnitRecord';

import { GET_COMBAT_UNITS } from './requests';

import './index.css';

// const units = [
//   { id: 102, type: 'мультироторный', role: 'разведчик', status: 'active' },
//   { id: 103, type: 'мультироторный', role: 'ударный', status: 'active' },
//   { id: 104, type: 'самолёт', role: 'ударный', status: 'active' },
//   { id: 105, type: 'самолёт', role: 'ударный', status: 'active' },
//   { id: 106, type: 'мультироторный', role: 'ударный', status: 'active' }
// ];

const UnitsList = ({ stylization, onClose }) => {
  const { data } = useQuery(GET_COMBAT_UNITS);

  const { units = [] } = data || {};
  return (
    <div className={classNames('units-list', stylization)}>
      <div className="list-title">
        <span className="title">Список добавленных БпЛА</span>
        <button className="close-button" type="button" onClick={onClose}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
      </div>
      <div className="list-records">
        {units.map(({ id }) => (
          <UnitRecord key={id} stylization="list-record" id={id} />
        ))}
      </div>
    </div>
  );
};

UnitsList.propTypes = {
  stylization: PropTypes.string,
  onClose: PropTypes.func
};

UnitsList.defaultProps = {
  stylization: '',
  onClose: () => {}
};

export default UnitsList;
