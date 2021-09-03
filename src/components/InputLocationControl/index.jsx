import React, { useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Control from 'react-leaflet-control';

import ControlPanel from '../ControlPanel';
import StateControl from '../StateControl';
import PrimaryButton from '../PrimaryButton';

import Context from '../ViewInputLocation/context';
import events from '../ViewInputLocation/events';
import AreaTypes from '../InputLocationAreas/AreaTypes';

import './index.css';

const InputLocationControl = ({ position, stylization }) => {
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
        stylization={classNames('input-location-control', stylization)}
        title="Ввод параметров местности"
      >
        <div className="form-controls">
          <div className="state-controls">
            <div className="controls-block">
              <div className="block-icon">
                <i className="fas fa-map" />
              </div>
              <div className="controls-list">
                <StateControl
                  name={AreaTypes.RADAR_JAMMING_AREA}
                  label="Ввод области РЭП"
                  active={AreaTypes.RADAR_JAMMING_AREA === state.drawingMode}
                  onChoose={setDrawingMode}
                  onClose={stopDrawing}
                  stylization="control"
                />
                <StateControl
                  name={AreaTypes.IMPASSABLE_AREA}
                  label="Ввод непроходимой области"
                  active={AreaTypes.IMPASSABLE_AREA === state.drawingMode}
                  onChoose={setDrawingMode}
                  onClose={stopDrawing}
                  stylization="control"
                />
              </div>
            </div>
          </div>
          <div className="submit-controls">
            <PrimaryButton stylization="submit-controls-button">Сохранить</PrimaryButton>
          </div>
        </div>
      </ControlPanel>
    </Control>
  );
};

InputLocationControl.propTypes = {
  position: PropTypes.string,
  stylization: PropTypes.string
};

InputLocationControl.defaultProps = {
  position: 'topleft',
  stylization: ''
};

export default InputLocationControl;
