import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useQuery } from '@apollo/client';

import PointRecord from '../PointRecord';

import { GET_COMBAT_UNIT } from './requests';

import './index.css';

const mapStatus = {
  SPAWNED: 'добавлен',
  LAUNCHED: 'движение в ЦР',
  LOST: 'потерян',
  STOPPED: 'приземлился',
  DISCHARGED: 'разряжен',
  ATTACK_TARGET: 'атака'
};

const UnitRecord = ({ id, stylization }) => {
  const { data, loading, error } = useQuery(GET_COMBAT_UNIT, { variables: { id } });

  if (loading || error) return null;

  const {
    unit: { status, role, type, altitude, coordinates, timeLeft }
  } = data;
  return (
    <div className={classNames('unit-record', stylization)}>
      <div className="record-header">
        <span>№ {id},</span>
        {role && <span>{role.name},</span>}
        {status && <span>{mapStatus[status] || 'Неизвестно'}</span>}
      </div>
      <div className="record-descriptor">
        {type && <p className="record-row">{type.name}</p>}
        {altitude && <p className="record-row">Высота {altitude} м</p>}
        {coordinates && (
          <p className="record-row">
            <PointRecord point={coordinates} />
          </p>
        )}
        {timeLeft && <p className="record-row">Заряда ещё на {timeLeft} с</p>}
      </div>
    </div>
  );
};

UnitRecord.propTypes = {
  id: PropTypes.string.isRequired,
  stylization: PropTypes.string
};

UnitRecord.defaultProps = {
  stylization: ''
};

export default UnitRecord;
