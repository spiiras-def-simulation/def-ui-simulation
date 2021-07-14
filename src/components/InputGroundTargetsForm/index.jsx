import React, { useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useMutation } from '@apollo/client';
import Control from 'react-leaflet-control';

import ControlPanel from '../ControlPanel';
import PrimaryButton from '../PrimaryButton';

import Context from '../ViewInputGroundTargets/context';
import { events } from './reducer';
import { ADD_GROUND_TARGETS } from './requests';

import './index.css';

const InputGroundTargetsForm = ({ position, stylization }) => {
  const { state, dispatch } = useContext(Context);
  const [addGroundTargets] = useMutation(ADD_GROUND_TARGETS);

  const { mapPointStatus, values } = state;

  const handleChangeSetPointStatus = useCallback(
    status => {
      if (status !== mapPointStatus) {
        dispatch({ type: events.SET_MAP_POINT_STATUS, value: status });
      } else {
        dispatch({ type: events.SET_MAP_POINT_STATUS, value: null });
      }
    },
    [mapPointStatus, dispatch]
  );

  const handleSubmitGroundTargets = useCallback(() => {
    addGroundTargets({
      variables: {
        input: { ...values }
      }
    });
  }, [values, addGroundTargets]);

  const { number, location, target } = values;
  return (
    <Control position={position}>
      <ControlPanel
        stylization={classNames('input-ground-targets-form', stylization)}
        title="Добавление наземных целей"
      >
        <div className="form-controls">
          <ul className="inputs-list">
            <li className="form-input">
              <p>Количество целей:</p>
              <input
                className="input-field"
                type="number"
                name="name"
                value={number || ''}
                onChange={e =>
                  dispatch({ type: events.SET_FORM_VALUE, name: 'number', value: e.target.value })
                }
              />
            </li>
            <li className="form-input">
              <p>Расположение:</p>
              <div className="input-coordinates">
                <input
                  type="text"
                  placeholder="x"
                  name="x"
                  disabled
                  value={location !== null ? location.x : ''}
                />
                <input
                  type="text"
                  placeholder="y"
                  name="y"
                  disabled
                  value={location !== null ? location.y : ''}
                />
                <button
                  className={classNames(
                    mapPointStatus === 'location' ? 'active-set-point-button' : 'set-point-button'
                  )}
                  type="button"
                  onClick={() => handleChangeSetPointStatus('location')}
                >
                  <i className="fa fa-bullseye" />
                </button>
              </div>
            </li>
            <li className="form-input">
              <p>Целевая точка:</p>
              <div className="input-coordinates">
                <input
                  type="text"
                  placeholder="x"
                  name="x"
                  disabled
                  value={target !== null ? target.x : ''}
                />
                <input
                  type="text"
                  placeholder="y"
                  name="y"
                  disabled
                  value={target !== null ? target.y : ''}
                />
                <button
                  type="button"
                  className={classNames(
                    mapPointStatus === 'target' ? 'active-set-point-button' : 'set-point-button'
                  )}
                  onClick={() => handleChangeSetPointStatus('target')}
                >
                  <i className="fa fa-bullseye" />
                </button>
              </div>
            </li>
          </ul>
          <div className="form-buttons">
            <PrimaryButton stylization="form-submit-button" onClick={handleSubmitGroundTargets}>
              Добавить
            </PrimaryButton>
          </div>
        </div>
      </ControlPanel>
    </Control>
  );
};

InputGroundTargetsForm.propTypes = {
  position: PropTypes.string,
  stylization: PropTypes.string
};

InputGroundTargetsForm.defaultProps = {
  position: 'topleft',
  stylization: ''
};

export default InputGroundTargetsForm;
