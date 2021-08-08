import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useQuery } from '@apollo/client';

import { GET_COMBAT_UNIT } from './requests';

import './index.css';

const UnitRecord = ({ id, stylization }) => {
  const { data, loading, error } = useQuery(GET_COMBAT_UNIT, { variables: { id } });

  if (loading || error) return null;

  const {
    unit: { type, coordinates, telemetry }
  } = data;
  return (
    <div className={classNames('unit-record', stylization)}>
      <div className="record-header">
        <span>ID {id},</span>
        <span>Разведчик ({type.name})</span>
      </div>
      {coordinates && (
        <div className="record-coordinates">
          <p className="descriptor-coordinate">Долгота: {coordinates.y}</p>
          <p className="descriptor-coordinate">Широта: {coordinates.x}</p>
        </div>
      )}
      {telemetry && <div className="record-telemetry"></div>}
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
