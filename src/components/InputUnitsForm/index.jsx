import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useQuery, useMutation } from '@apollo/client';

import Select from '../Select';
import PrimaryButton from '../PrimaryButton';

import { GET_UNIT_ROLES, ADD_COMBAT_UNITS } from './requests';

import './index.css';

const InputUnitsForm = ({ stylization, onClose }) => {
  const [values, setValues] = useState({});
  const { data } = useQuery(GET_UNIT_ROLES);
  const [addUnits] = useMutation(ADD_COMBAT_UNITS);

  const handleInputValue = useCallback(
    ({ target }) => {
      const nextState = { ...values };
      nextState[target.name] = target.value;
      setValues(nextState);
    },
    [values]
  );

  const handleSubmitUnits = useCallback(() => {
    addUnits({ variables: { input: values } });
  }, [values, addUnits]);

  const roleOptions = useMemo(() => {
    const { roles = [] } = data || {};
    return roles.map(({ id, name, unitType }) => ({
      id,
      name: `${name} (${unitType.name})`
    }));
  }, [data]);

  return (
    <div className={classNames('input-units-form', stylization)}>
      <div className="form-title">
        <span className="title">Добавление новых БпЛА</span>
        <button className="close-button" type="button" onClick={onClose}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
      </div>
      <ul className="inputs-list">
        <li className="form-input">
          <p>Тип роли БпЛА:</p>
          <Select
            stylization="input-field"
            name="role"
            defaultValue="Выберите тип роли"
            value={values.role || null}
            options={roleOptions}
            onChange={handleInputValue}
          />
        </li>
        <li className="form-input">
          <p>Количество БпЛА:</p>
          <input
            className="input-field"
            name="number"
            type="text"
            value={values.number || ''}
            onChange={handleInputValue}
          />
        </li>
        <li className="form-input">
          <p>Время работы БпЛА (в час.):</p>
          <input
            className="input-field"
            name="fuelResource"
            type="text"
            value={values.fuelResource || ''}
            onChange={handleInputValue}
          />
        </li>
        <li className="form-input">
          <p>Время готовности БпЛА (в сек.):</p>
          <input
            className="input-field"
            name="timePrepare"
            type="text"
            value={values.timePrepare || ''}
            onChange={handleInputValue}
          />
        </li>
      </ul>
      <div className="form-buttons">
        <PrimaryButton stylization="form-submit-button" onClick={handleSubmitUnits}>
          Добавить
        </PrimaryButton>
      </div>
    </div>
  );
};

InputUnitsForm.propTypes = {
  stylization: PropTypes.string,
  onClose: PropTypes.func
};

InputUnitsForm.defaultProps = {
  stylization: '',
  onClose: () => {}
};

export default InputUnitsForm;
