import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useQuery } from '@apollo/client';

import PointRecord from '../PointRecord';

import { GET_COMBAT_UNIT } from './requests';

import './index.css';

const UnitRecord = ({ id, stylization }) => {
  const { data, loading, error } = useQuery(GET_COMBAT_UNIT, { variables: { id } });

  if (loading || error) return null;

  const {
    unit: { role, type, coordinates }
  } = data;
  return (
    <div className={classNames('unit-record', stylization)}>
      <div className="record-header">
        <span>№ {id}</span>
        {role && (
          <span>
            , {role.name} ({type.name})
          </span>
        )}
      </div>
      {coordinates && (
        <div className="record-descriptor">
          <PointRecord point={coordinates} />
        </div>
      )}
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
