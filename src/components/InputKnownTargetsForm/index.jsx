import React, { useContext, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useMutation } from '@apollo/client';

import PrimaryButton from '../PrimaryButton';
import PointRecord from '../PointRecord';

import MapContext from '../ViewMap/context';
import Context from '../ViewInputMission/context';
import events from '../ViewInputMission/events';

import { LOAD_MISSION_TARGET_OBJECTS } from './requests';

import './index.css';

const InputKnownTargetsForm = ({ stylization, onClose }) => {
  const { projection } = useContext(MapContext);
  const { state, dispatch } = useContext(Context);
  const [loadTargets, { data: loadTargetsData }] = useMutation(LOAD_MISSION_TARGET_OBJECTS);

  const { targets: storeTargets } = state;
  const targets = useMemo(() => {
    const objects = (loadTargetsData && loadTargetsData.objects) || storeTargets || null;
    if (!loadTargetsData) return objects;
    return (
      objects &&
      objects.map(object => ({
        id: object.id,
        coordinates: projection.project(object.coordinates)
      }))
    );
  }, [storeTargets, loadTargetsData, projection]);

  const setMissionTargets = useCallback(() => {
    dispatch({ type: events.SET_MISSION_TARGETS, data: targets });
  }, [targets, dispatch]);

  return (
    <form className={classNames('input-known-targets-form', stylization)}>
      <div className="form-title">
        <span className="title">Данные предварительной разведки</span>
        <button className="close-button" type="button" onClick={onClose}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
      </div>
      <div className="targets-status">
        <div className="targets-status-header">
          <span>Известные цели</span>
          <button type="button" onClick={loadTargets}>
            Загрузить
          </button>
        </div>
        <ul className="targets-list">
          {targets &&
            targets.map(target => (
              <li key={target.id} className="target-element">
                <PointRecord point={target.coordinates} />
              </li>
            ))}
        </ul>
      </div>
      <div className="form-buttons">
        <PrimaryButton stylization="form-submit" onClick={setMissionTargets}>
          Установить
        </PrimaryButton>
      </div>
    </form>
  );
};

InputKnownTargetsForm.propTypes = {
  stylization: PropTypes.string,
  onClose: PropTypes.func
};

InputKnownTargetsForm.defaultProps = {
  stylization: '',
  onClose: () => {}
};

export default InputKnownTargetsForm;
