import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import PointRecord from '../PointRecord';

import MapContext from '../ViewMap/context';

import './index.css';

const mapStatus = {
  REGISTRED: 'добавлен',
  LAUNCHED: 'движется',
  DETECTED: 'обнаружен',
  DESTROYED: 'уничтожен',
  STOPPED: 'остановлен'
};

const GroundTargetRecord = ({ object, stylization }) => {
  const { projection } = useContext(MapContext);

  const { id, type, status, coordinates } = object;
  const position = useMemo(() => {
    return coordinates && projection.project(coordinates);
  }, [coordinates, projection]);

  return (
    <div className={classNames('ground-target-record', stylization)}>
      <div className="record-header">
        <span>{`№${id},`}</span>
        {type && <span>{type},</span>}
        {status && <span>{mapStatus[status] || 'неизвестно'}</span>}
      </div>
      {coordinates && (
        <div className="record-descriptor">
          <PointRecord point={position} />
        </div>
      )}
    </div>
  );
};

GroundTargetRecord.propTypes = {
  object: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    status: PropTypes.string,
    coordinates: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number
    })
  }).isRequired,
  stylization: PropTypes.string
};

GroundTargetRecord.defaultProps = {
  stylization: ''
};

export default GroundTargetRecord;
