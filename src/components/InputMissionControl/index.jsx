import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Control from 'react-leaflet-control';

import StateControl from '../StateControl';
import InputMissionForm from '../InputMissionForm';
import PrimaryButton from '../PrimaryButton';
import Button from '../Button';

import 'react-input-range/lib/css/index.css';
import './index.css';

const Controls = {
  MISSION_PARAMS: 'missionParams'
};

const DrawingControls = {
  SCOUTING_AREA: 'scoutingArea',
  DUMP_AMMO_AREA: 'dumpAmmoArea',
  DEPARTURE_AREA: 'departureArea',
  LANDING_AREA: 'landingArea'
};

const SimulationControl = ({ position, stylization }) => {
  const [activeControl, setControl] = useState(null);
  const [activeDrawingControl, setDrawingControl] = useState(null);

  const setActiveControl = useCallback(name => {
    const isExistName = Object.values(Controls).includes(name);
    if (isExistName) {
      setControl(name);
    }
  }, []);
  const closeControl = useCallback(() => {
    setControl(null);
  }, []);

  const setActiveDrawingControl = useCallback(name => {
    const isExistName = Object.values(DrawingControls).includes(name);
    if (isExistName) {
      setDrawingControl(name);
    }
  }, []);
  const closeDrawingControl = useCallback(() => {
    setDrawingControl(null);
  }, []);

  return (
    <Control position={position}>
      <div className={classNames('input-mission-control', stylization)}>
        <div className="control-title">
          <span className="title">Ввод боевого задания</span>
          <i className="fa fa-times close-button" aria-hidden="true"></i>
        </div>
        <div className="form-controls">
          <div className="state-controls">
            <div className="controls-block">
              <div className="block-icon">
                <i className="fas fa-flag" />
              </div>
              <div className="controls-list">
                <StateControl
                  name={Controls.MISSION_PARAMS}
                  label="Ввод параметров задачи"
                  activeControl={activeControl}
                  onChoose={setActiveControl}
                  onClose={closeControl}
                  stylization="control"
                >
                  <InputMissionForm
                    stylization="control-panel modal-theme"
                    onClose={closeControl}
                  />
                </StateControl>
              </div>
            </div>
            <div className="controls-block">
              <div className="block-icon">
                <i className="fas fa-map" />
              </div>
              <div className="controls-list">
                <StateControl
                  name={DrawingControls.SCOUTING_AREA}
                  label="Ввод области ЦР"
                  activeControl={activeDrawingControl}
                  onChoose={setActiveDrawingControl}
                  onClose={closeDrawingControl}
                  stylization="control"
                />
                <StateControl
                  name={DrawingControls.DUMP_AMMO_AREA}
                  label="Ввод области сброса неисп. СГ"
                  activeControl={activeDrawingControl}
                  onChoose={setActiveDrawingControl}
                  onClose={closeDrawingControl}
                  stylization="control"
                />
                <StateControl
                  name={DrawingControls.DEPARTURE_AREA}
                  label="Ввод области отправления"
                  activeControl={activeDrawingControl}
                  onChoose={setActiveDrawingControl}
                  onClose={closeDrawingControl}
                  stylization="control"
                />
                <StateControl
                  name={DrawingControls.LANDING_AREA}
                  label="Ввод области приземления"
                  activeControl={activeDrawingControl}
                  onChoose={setActiveDrawingControl}
                  onClose={closeDrawingControl}
                  stylization="control"
                />
              </div>
            </div>
          </div>
          <div className="submit-controls">
            <PrimaryButton stylization="submit-controls-button">Сохранить</PrimaryButton>
            <Button stylization="submit-controls-button">Сбросить</Button>
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
