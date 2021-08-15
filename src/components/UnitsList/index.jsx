import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useQuery } from '@apollo/client';

import UnitRecord from '../UnitRecord';

import { GET_COMBAT_UNITS } from './requests';

import './index.css';

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
