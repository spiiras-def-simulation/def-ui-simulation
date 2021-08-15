import React, { useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useMutation } from '@apollo/client';
import Control from 'react-leaflet-control';

import ControlPanel from '../ControlPanel';
import ControlsBlock from '../ControlsBlock';
import StateControl from '../StateControl';
import InputMissionForm from '../InputMissionForm';
import InputUnitsGroupForm from '../InputUnitsGroupForm';
import InputMissionLocationControls from '../InputMissionLocationControls';
import PrimaryButton from '../PrimaryButton';

import Context from '../ViewInputMission/context';
import events from '../ViewInputMission/events';
import AreaTypes from '../InputMissionAreas/AreaTypes';

import { ADD_MISSION } from './requests';

import './index.css';

const Controls = {
  MISSION_PARAMS: 'missionParams',
  MISSION_UNITS: 'missionUnits'
};

const InputMissionControl = ({ position, stylization }) => {
  const { state, dispatch } = useContext(Context);
  const [addMission] = useMutation(ADD_MISSION);

  const stopDrawing = useCallback(() => {
    dispatch({ type: events.SET_DRAWING_MODE, data: null });
  }, [dispatch]);
  const setDrawingMode = useCallback(
    mode => {
      dispatch({ type: events.SET_DRAWING_MODE, data: mode });
    },
    [dispatch]
  );
  const handleSubmitMission = useCallback(() => {
    const { params, areas, locations, units } = state;

    const inputValues = { ...params, ...locations };
    inputValues.scoutingArea = areas.scoutingArea.data;
    inputValues.uavs = units.uavs;
    inputValues.successLevel = parseInt(params.successLevel, 10) / 100;
    inputValues.strikeLevel = parseInt(params.strikeLevel, 10) / 100;

    addMission({ variables: { input: inputValues } });
  }, [state, addMission]);

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
                    <StateControl
                      name={Controls.MISSION_UNITS}
                      label="Выбор боевой группы"
                      active={Controls.MISSION_UNITS === active}
                      onChoose={setActive}
                      onClose={closeActive}
                      stylization="control"
                    >
                      <InputUnitsGroupForm
                        stylization="control-panel modal-theme"
                        onClose={closeActive}
                      />
                    </StateControl>
                  </div>
                </div>
              )}
            </ControlsBlock>
            <div className="controls-block">
              <div className="controls-list"></div>
            </div>
            <div className="controls-block">
              <div className="block-icon">
                <i className="fas fa-map-marked-alt" />
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
              </div>
            </div>
            <div className="controls-block">
              <div className="controls-list">
                <InputMissionLocationControls />
              </div>
            </div>
          </div>
          <div className="submit-controls">
            <PrimaryButton stylization="submit-controls-button" onClick={handleSubmitMission}>
              Сохранить
            </PrimaryButton>
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
