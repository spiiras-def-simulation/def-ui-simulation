import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Control from 'react-leaflet-control';

import StateControl from '../StateControl';
import AddMapForm from '../AddMapForm';
import AddUnitTypeForm from '../AddUnitTypeForm';
import AddUnitForm from '../AddUnitForm';

import 'react-input-range/lib/css/index.css';
import './index.css';

const Controls = { ADD_MAP: 'addMap', ADD_UNIT: 'addUnit', ADD_UNIT_TYPE: 'addUnitType' };

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
              <i className="fas fa-map" />
            </div>
            <div className="controls-list">
              <StateControl
                name={Controls.ADD_MAP}
                label="Загрузить карту местности"
                activeControl={activeControl}
                onChoose={pushControl}
                stylization="control"
              >
                <AddMapForm stylization="control-form modal-theme" onClose={closeControl} />
              </StateControl>
            </div>
          </div>
          <div className="controls-block">
            <div className="block-icon">
              <i className="fas fa-plane" />
            </div>
            <div className="controls-list">
              <StateControl
                name={Controls.ADD_UNIT_TYPE}
                label="Добавить новый тип БпЛА"
                activeControl={activeControl}
                onChoose={pushControl}
                stylization="control"
              >
                <AddUnitTypeForm stylization="control-form modal-theme" onClose={closeControl} />
              </StateControl>
              <StateControl
                name={Controls.ADD_UNIT}
                label="Добавить новый БпЛА"
                activeControl={activeControl}
                onChoose={pushControl}
                stylization="control"
              >
                <AddUnitForm stylization="control-form modal-theme" onClose={closeControl} />
              </StateControl>
              <div className="control">
                <span>Список БпЛА</span>
              </div>
            </div>
          </div>
          <div className="controls-block">
            <div className="block-icon">
              <i className="fas fa-flag" />
            </div>
            <div className="controls-list">
              <div className="control">
                <span>Добавить боевую миссию</span>
              </div>
              <div className="control">
                <span>Список боевых миссий</span>
              </div>
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
