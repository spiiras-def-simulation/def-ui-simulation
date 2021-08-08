import React, { useContext, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import InputUnitsScoutBlock from '../InputUnitsScoutBlock';
import InputUnitsStrikeBlock from '../InputUnitsStrikeBlock';
import PrimaryButton from '../PrimaryButton';

import Context from '../ViewInputMission/context';
import events from '../ViewInputMission/events';

import './index.css';

const InputUnitsGroupForm = ({ stylization, onClose }) => {
  const { state, dispatch } = useContext(Context);
  const [values, setValues] = useState(state.units.uavs);

  const handleUpdateUnits = useCallback(
    units => {
      setValues(units);
    },
    [setValues]
  );

  const handleSubmitUnitsGroup = useCallback(() => {
    dispatch({ type: events.SET_UNIT_GROUP, data: values || [] });
  }, [values, dispatch]);

  return (
    <form className={classNames('input-units-group-form', stylization)}>
      <div className="form-title">
        <span className="title">Выбор боевой группы</span>
        <button className="close-button" type="button" onClick={onClose}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
      </div>
      <ul className="inputs-list">
        <li className="form-input">
          <InputUnitsScoutBlock values={values} onUpdateUnits={handleUpdateUnits} />
        </li>
        <li className="form-input">
          <InputUnitsStrikeBlock values={values} onUpdateUnits={handleUpdateUnits} />
        </li>
      </ul>
      <div className="form-buttons">
        <PrimaryButton stylization="form-submit-button" onClick={handleSubmitUnitsGroup}>
          Запомнить
        </PrimaryButton>
      </div>
    </form>
  );
};

InputUnitsGroupForm.propTypes = {
  stylization: PropTypes.string,
  onClose: PropTypes.func
};

InputUnitsGroupForm.defaultProps = {
  stylization: '',
  onClose: () => {}
};

export default InputUnitsGroupForm;
