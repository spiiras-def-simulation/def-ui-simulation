import React, { useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Control from 'react-leaflet-control';

import ControlPanel from '../ControlPanel';
import ControlsBlock from '../ControlsBlock';
import StateControl from '../StateControl';
import InputMissionForm from '../InputMissionForm';
import PrimaryButton from '../PrimaryButton';
import Button from '../Button';

import Context from '../ViewInputMission/context';
import events from '../ViewInputMission/events';
import AreaTypes from '../InputMissionAreas/AreaTypes';

import './index.css';

const Controls = {
  MISSION_PARAMS: 'missionParams'
};

const InputMissionControl = ({ position, stylization }) => {
  const { state, dispatch } = useContext(Context);

  const stopDrawing = useCallback(() => {
    dispatch({ type: events.SET_DRAWING_MODE, data: null });
  }, [dispatch]);

  const setDrawingMode = useCallback(
    mode => {
      dispatch({ type: events.SET_DRAWING_MODE, data: mode });
    },
    [dispatch]
  );

  return (
    <Control position={position}>
      <ControlPanel
        stylization={classNames('input-mission-control', stylization)}
        title="Ввод боевой задачи"
      >
        <div className="form-controls">
          <div className="state-controls">
            <ControlsBlock>
              {(active, setActive, closeActive) => (
                <div className="controls-block">
                  <div className="block-icon">
                    <i className="fas fa-flag" />
                  </div>
                  <div className="controls-list">
                    <StateControl
                      name={Controls.MISSION_PARAMS}
                      label="Ввод параметров задачи"
                      active={Controls.MISSION_PARAMS === active}
                      onChoose={setActive}
                      onClose={closeActive}
                      stylization="control"
                    >
                      <InputMissionForm
                        stylization="control-panel modal-theme"
                        onClose={closeActive}
                      />
                    </StateControl>
                  </div>
                </div>
              )}
            </ControlsBlock>
            <div className="controls-block">
              <div className="block-icon">
                <i className="fas fa-map" />
              </div>
              <div className="controls-list">
                <StateControl
                  name={AreaTypes.SCOUTING_AREA}
                  label="Ввод области ЦР"
                  active={AreaTypes.SCOUTING_AREA === state.drawingMode}
                  onChoose={setDrawingMode}
                  onClose={stopDrawing}
                  stylization="control"
                />
                <StateControl
                  name={AreaTypes.DUMP_AMMO_AREA}
                  label="Ввод области сброса неисп. СГ"
                  active={AreaTypes.DUMP_AMMO_AREA === state.drawingMode}
                  onChoose={setDrawingMode}
                  onClose={stopDrawing}
                  stylization="control"
                />
                <StateControl
                  name={AreaTypes.DEPARTURE_AREA}
                  label="Ввод области отправления"
                  active={AreaTypes.DEPARTURE_AREA === state.drawingMode}
                  onChoose={setDrawingMode}
                  onClose={stopDrawing}
                  stylization="control"
                />
                <StateControl
                  name={AreaTypes.LANDING_AREA}
                  label="Ввод области приземления"
                  active={AreaTypes.LANDING_AREA === state.drawingMode}
                  onChoose={setDrawingMode}
                  onClose={stopDrawing}
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
      </ControlPanel>
    </Control>
  );
};

InputMissionControl.propTypes = {
  position: PropTypes.string,
  stylization: PropTypes.string
};

InputMissionControl.defaultProps = {
  position: 'topleft',
  stylization: ''
};

export default InputMissionControl;
