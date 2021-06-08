import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Control from 'react-leaflet-control';

import StateControl from '../StateControl';
import SetLocationPosition from '../SetLocationPosition';
import PrimaryButton from '../PrimaryButton';

import 'react-input-range/lib/css/index.css';
import './index.css';

const Controls = {
  LOCATION_POSITION: 'locationPosition'
};

const DrawingControls = {
  RADAR_WARFARE_AREA: 'radarWarfareArea',
  RADAR_JAMMING_AREA: 'radarJammingArea',
  IMPASSABLE_AREA: 'impassableArea'
};

const InputLocationControl = ({ position, stylization }) => {
  const [activeControl, setControl] = useState(null);
  const [activeDrawingControl, setDrawingControl] = useState(null);

  const pushControlPanel = useCallback(name => {
    const isExistName = Object.values(Controls).includes(name);
    if (isExistName) {
      setControl(name);
    }
  }, []);
  const closeControlPanel = useCallback(() => {
    setControl(null);
  }, []);

  const pushDrawingControlPanel = useCallback(name => {
    const isExistName = Object.values(DrawingControls).includes(name);
    if (isExistName) {
      setDrawingControl(name);
    }
  }, []);
  const closeDrawingControlPanel = useCallback(() => {
    setDrawingControl(null);
  }, []);

  return (
    <Control position={position}>
      <div className={classNames('input-location-control', stylization)}>
        <div className="control-title">
          <span className="title">Ввод параметров местности</span>
          <i className="fa fa-times close-button" aria-hidden="true"></i>
        </div>
        <div className="form-controls">
          <div className="state-controls">
            <div className="controls-block">
              <div className="block-icon">
                <i className="fas fa-map-marked-alt" />
              </div>
              <div className="controls-list">
                <StateControl
                  name={Controls.LOCATION_POSITION}
                  label="Ввод положения местности"
                  activeControl={activeControl}
                  onChoose={pushControlPanel}
                  onClose={closeControlPanel}
                  stylization="control"
                >
                  <SetLocationPosition
                    stylization="control-panel modal-theme"
                    onClose={closeControlPanel}
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
                  name={DrawingControls.RADAR_WARFARE_AREA}
                  label="Ввод области РЭБ"
                  activeControl={activeDrawingControl}
                  onChoose={pushDrawingControlPanel}
                  onClose={closeDrawingControlPanel}
                  stylization="control"
                />
                <StateControl
                  name={DrawingControls.RADAR_JAMMING_AREA}
                  label="Ввод области РЭП"
                  activeControl={activeDrawingControl}
                  onChoose={pushDrawingControlPanel}
                  onClose={closeDrawingControlPanel}
                  stylization="control"
                />
                <StateControl
                  name={DrawingControls.IMPASSABLE_AREA}
                  label="Ввод непроходимой области"
                  activeControl={activeDrawingControl}
                  onChoose={pushDrawingControlPanel}
                  onClose={closeDrawingControlPanel}
                  stylization="control"
                />
              </div>
            </div>
          </div>
          <div className="submit-controls">
            <PrimaryButton stylization="submit-controls-button">Сохранить</PrimaryButton>
          </div>
        </div>
      </div>
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
