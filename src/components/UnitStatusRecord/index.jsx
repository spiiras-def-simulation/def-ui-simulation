import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.css';

const mapStatus = {
  SPAWNED: 'добавлен',
  LAUNCHED: 'движение в ЦР',
  LOST: 'потерян',
  STOPPED: 'приземлился',
  DISCHARGED: 'разряжен',
  ATTACK_TARGET: 'атака'
};

const UnitStatusRecord = ({ record, stylization, subToUpdate }) => {
  useEffect(() => subToUpdate(), [subToUpdate]);
  const { id, status, role, type } = record;
  return (
    <div className={classNames('unit-status-record', stylization)}>
      <p className="record-header">
        <span>№ {id},</span>
        {role && <span>{role}</span>}
        {status && <span>{mapStatus[status] || 'неизвестно'}</span>}
      </p>
      <div className="record-descriptions">{type && <p>{type}</p>}</div>
    </div>
  );
};

UnitStatusRecord.propTypes = {
  record: PropTypes.shape({
    id: PropTypes.string,
    status: PropTypes.string,
    type: PropTypes.string,
    role: PropTypes.string
  }).isRequired,
  stylization: PropTypes.string,
  subToUpdate: PropTypes.func
};

UnitStatusRecord.defaultProps = {
  stylization: '',
  subToUpdate: () => {}
};

export default UnitStatusRecord;
