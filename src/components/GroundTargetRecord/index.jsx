import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useQuery } from '@apollo/client';

import MapContext from '../ViewMap/context';

import { GET_TARGET_OBJECT } from './requests';

import './index.css';

const GroundTargetRecord = ({ id, stylization }) => {
  const { projection } = useContext(MapContext);
  const { data } = useQuery(GET_TARGET_OBJECT, { variables: { id } });

  const coordinates =
    data && data.object.coordinates ? projection.project(data.object.coordinates) : null;
  return (
    <div className={classNames('ground-target-record', stylization)}>
      <div className="record-header">
        <span>{`ID ${id}${!coordinates ? ', неизвестная позиция' : ''}`}</span>
        {/* <button type="button" className="delete-button">
          Удалить
        </button> */}
      </div>
      {coordinates && (
        <div className="record-descriptor">
          <p className="descriptor-coordinate">Долгота: {coordinates.y}</p>
          <p className="descriptor-coordinate">Широта: {coordinates.x}</p>
        </div>
      )}
    </div>
  );
};

GroundTargetRecord.propTypes = {
  id: PropTypes.string.isRequired,
  stylization: PropTypes.string
};

GroundTargetRecord.defaultProps = {
  stylization: ''
};

export default GroundTargetRecord;
