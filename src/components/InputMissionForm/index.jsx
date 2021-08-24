import React, { useState, useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import PrimaryButton from '../PrimaryButton';

import Context from '../ViewInputMission/context';
import events from '../ViewInputMission/events';

import './index.css';

const inputs = [
  {
    title: 'Макс. время на выполнение (с):',
    type: 'number',
    name: 'directiveTime',
    placeholder: 0
  },
  {
    title: 'Интервал запуска БпЛА с катапульты (с):',
    type: 'number',
    name: 'timeLaunch',
    placeholder: 0
  },
  {
    title: 'Число одновременно запускаемых БпЛА:',
    type: 'number',
    name: 'numLaunch',
    placeholder: 0
  },
  {
    title: 'Гарантир. уровень выполнения ЦЗ (%):',
    type: 'number',
    name: 'successLevel',
    placeholder: 0
  }
  // {
  //   title: 'Гарантир. успех поражения ЦО (%):',
  //   type: 'number',
  //   name: 'strikeLevel',
  //   placeholder: 0
  // }
];

const InputMissionForm = ({ stylization, onClose }) => {
  const { state, dispatch } = useContext(Context);
  const [values, setValues] = useState(state.params);

  const handleMissionValue = useCallback(
    event => {
      const inputName = event.target.name;
      const inputValue = event.target.value;
      const nextState = { ...values };
      nextState[inputName] = inputValue;
      setValues(nextState);
    },
    [values, setValues]
  );

  const setMissionParams = useCallback(() => {
    dispatch({ type: events.SET_MISSION_PARAMS, data: { ...values } });
  }, [values, dispatch]);

  return (
    <form className={classNames('input-mission-form', stylization)}>
      <div className="form-title">
        <span className="title">Параметры боевой задачи</span>
        <button className="close-button" type="button" onClick={onClose}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
      </div>
      <ul className="inputs-list">
        {inputs.map(({ title, type, name, placeholder }) => (
          <li key={name} className="form-input">
            <p>{title}</p>
            <input
              type={type}
              name={name}
              placeholder={placeholder}
              value={values[name] !== undefined ? values[name] : ''}
              onChange={handleMissionValue}
            />
          </li>
        ))}
      </ul>
      <div className="form-buttons">
        <PrimaryButton stylization="form-submit" onClick={setMissionParams}>
          Установить
        </PrimaryButton>
      </div>
    </form>
  );
};

InputMissionForm.propTypes = {
  stylization: PropTypes.string,
  onClose: PropTypes.func
};

InputMissionForm.defaultProps = {
  stylization: '',
  onClose: () => {}
};

export default InputMissionForm;
