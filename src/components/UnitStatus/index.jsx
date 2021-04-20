import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.css';

const unit = {
  id: '102',
  type: 'мультироторные',
  role: 'разведывательные',
  coordinates: { x: 54.2636, y: 55.3535, z: 32.2123 },
  velocity: {
    linear: { x: 0.5, y: 0.0, z: 0.0 },
    angle: { x: 0.0, y: 0.0, z: 0.5 }
  },
  battery: 0.8767
};

const UnitStatus = ({ stylization }) => {
  const {
    id: unitId,
    type: unitType,
    role: unitRole,
    coordinates: unitCoordinates,
    battery: unitBattery
  } = unit;
  const { linear: linearVelocity, angle: angleVelocity } = unit.velocity;
  return (
    <div className={classNames('unit-status', stylization)}>
      <p className="unit-title">
        <span className="title">Данные устройства ID {unitId}</span>
        <button className="show-button" type="button">
          Показать
        </button>
        <i className="fa fa-times close-button" aria-hidden="true"></i>
      </p>
      <div className="unit-description">
        <p className="state-record">Тип устройства: {unitType}</p>
        <p className="state-record">Роль устройства: {unitRole}</p>
        <p className="state-record">
          Глоб. коорд.: {unitCoordinates.x} {unitCoordinates.y} {unitCoordinates.z}
        </p>
        <p className="state-record">
          Лин. скорость: {linearVelocity.x} {linearVelocity.y} {linearVelocity.z}
        </p>
        <p className="state-record">
          Угл. скорость: {angleVelocity.x} {angleVelocity.y} {angleVelocity.z}
        </p>
        <p className="state-record">Заряд аккумулятора: {unitBattery * 100}%</p>
      </div>
    </div>
  );
};

UnitStatus.propTypes = {
  stylization: PropTypes.string
};

UnitStatus.defaultProps = {
  stylization: ''
};

export default UnitStatus;
