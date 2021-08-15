import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Control from 'react-leaflet-control';

import StateControl from '../StateControl';
import RefControl from '../RefControl';
import InputUnitTypeForm from '../InputUnitTypeForm';
import InputUnitRoleForm from '../InputUnitRoleForm';
import UnitsList from '../UnitsList';
// import SetLocationPosition from '../SetLocationPosition';
import GroundTargetsList from '../GroundTargetsList';

import './index.css';

const Controls = {
  ADD_UNIT_TYPE: 'addUnitType',
  ADD_UNIT_ROLE: 'addUnitRole',
  INPUT_UNITS: 'inputUnit',
  SHOW_UNITS_LIST: 'showUnitsList',
  INPUT_GROUND_TARGETS: 'inputGroundTargets',
  SHOW_GROUND_TARGETS_LIST: 'showGroundTargetsList',
  SET_LOCATION_POSITION: 'setLocationPosition',
  INPUT_LOCATION: 'inputLocation',
  INPUT_MISSION: 'inputMission'
};

const SimulationControl = ({ position, stylization }) => {
  const [activeControl, setActiveControl] = useState(null);

  const pushControl = useCallback(name => {
    const isExistName = Object.values(Controls).includes(name);
    if (isExistName) {
      setActiveControl(name);
    }
  }, []);

  const closeControl = useCallback(() => {
    setActiveControl(null);
  }, []);

  return (
    <Control position={position}>
      <div className={classNames('simulation-control', stylization)}>
        <div className="control-title">
          <span className="title">Управление симуляцией</span>
          <i className="fa fa-times close-button" aria-hidden="true"></i>
        </div>
        <div className="state-controls">
          <div className="controls-block">
            <div className="block-icon">
              <i className="fas fa-plane" />
            </div>
            <div className="controls-list">
              <StateControl
                name={Controls.ADD_UNIT_TYPE}
                label="Добавить тип БпЛА"
                active={Controls.ADD_UNIT_TYPE === activeControl}
                onChoose={pushControl}
                onClose={closeControl}
                stylization="control"
              >
                <InputUnitTypeForm stylization="control-panel modal-theme" onClose={closeControl} />
              </StateControl>
              <StateControl
                name={Controls.ADD_UNIT_ROLE}
                label="Добавить роль БпЛА"
                active={Controls.ADD_UNIT_ROLE === activeControl}
                onChoose={pushControl}
                onClose={closeControl}
                stylization="control"
              >
                <InputUnitRoleForm stylization="control-panel modal-theme" onClose={closeControl} />
              </StateControl>
              <RefControl
                name={Controls.INPUT_UNITS}
                label="Добавить БпЛА"
                stylization="control"
                reference="/operation/input/units"
              />
              <StateControl
                name={Controls.SHOW_UNITS_LIST}
                label="Список БпЛА"
                active={Controls.SHOW_UNITS_LIST === activeControl}
                onChoose={pushControl}
                onClose={closeControl}
                stylization="control"
              >
                <UnitsList stylization="control-panel modal-theme" onClose={closeControl} />
              </StateControl>
            </div>
          </div>
          <div className="controls-block">
            <div className="block-icon">
              <i className="fas fa-truck-pickup" />
            </div>
            <div className="controls-list">
              <RefControl
                name={Controls.INPUT_GROUND_TARGETS}
                label="Добавить наземные цели"
                stylization="control"
                reference="/operation/input/targets"
              />
              <StateControl
                name={Controls.SHOW_GROUND_TARGETS_LIST}
                label="Список наземных целей"
                active={Controls.SHOW_GROUND_TARGETS_LIST === activeControl}
                onChoose={pushControl}
                onClose={closeControl}
                stylization="control"
              >
                <GroundTargetsList stylization="control-panel modal-theme" onClose={closeControl} />
              </StateControl>
            </div>
          </div>
          <div className="controls-block">
            <div className="block-icon">
              <i className="fas fa-map" />
            </div>
            <div className="controls-list">
              {/* <StateControl
                name={Controls.SET_LOCATION_POSITION}
                label="Установить положение местности"
                active={Controls.SET_LOCATION_POSITION === activeControl}
                onChoose={pushControl}
                onClose={closeControl}
                stylization="control"
              >
                <SetLocationPosition
                  stylization="control-panel modal-theme"
                  onClose={closeControl}
                />
              </StateControl> */}
              <RefControl
                name={Controls.INPUT_LOCATION}
                label="Ввод параметров местности"
                stylization="control"
                reference="/operation/input/location"
              />
            </div>
          </div>
          <div className="controls-block">
            <div className="block-icon">
              <i className="fas fa-flag" />
            </div>
            <div className="controls-list">
              <RefControl
                name={Controls.INPUT_MISSION}
                label="Ввод боевого задания"
                stylization="control"
                reference="/operation/input/mission"
              />
            </div>
          </div>
        </div>
      </div>
    </Control>
  );
};

SimulationControl.propTypes = {
  position: PropTypes.string,
  stylization: PropTypes.string
};

SimulationControl.defaultProps = {
  position: 'topleft',
  stylization: ''
};

export default SimulationControl;
