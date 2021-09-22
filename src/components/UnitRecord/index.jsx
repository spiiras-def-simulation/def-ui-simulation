import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useQuery } from '@apollo/client';

import UnitCoordinatesWithData from '../UnitCoordinatesWithData';
import UnitTimeLeftWithData from '../UnitTimeLeftWithData';

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

  const { unit = null } = data || {};
  if (!unit) return null;

  const { status, role, type, altitude } = unit;
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
        <p className="record-row">
          <UnitCoordinatesWithData id={id} />
        </p>
        <p className="record-row">
          <UnitTimeLeftWithData id={id} />
        </p>
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
