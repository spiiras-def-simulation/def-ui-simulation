import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useQuery, useMutation } from '@apollo/client';

import PrimaryButton from '../PrimaryButton';
import Select from '../Select';

import { GET_ROLE_OPTIONS, ADD_UNIT_ROLE } from './requests';

import './index.css';

const InputUnitRoleForm = ({ stylization, onClose }) => {
  const [values, setValues] = useState({});
  const { data } = useQuery(GET_ROLE_OPTIONS);
  const [addUnitRole] = useMutation(ADD_UNIT_ROLE);

  const handleInputValue = useCallback(
    ({ target }) => {
      const nextState = { ...values };
      nextState[target.name] = target.value;
      setValues(nextState);
    },
    [values]
  );

  const handleSubmitUnitType = useCallback(() => {
    const roleType = data.roleTypes.find(({ id }) => id === values.unitRoleType);
    addUnitRole({
      variables: {
        input: { name: roleType.name, unitType: values.unitType }
      }
    });
  }, [values, data, addUnitRole]);

  return (
    <div className={classNames('input-unit-role-form', stylization)}>
      <div className="form-title">
        <span className="title">Создание нового типа БпЛА</span>
        <button className="close-button" type="button" onClick={onClose}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
      </div>
      <ul className="inputs-list">
        <li className="form-input">
          <p>Тип роли БпЛА:</p>
          <Select
            stylization="input-field"
            name="unitRoleType"
            defaultValue="Выберите тип роли"
            value={values.unitRoleType || null}
            options={data ? data.roleTypes : []}
            onChange={handleInputValue}
          />
        </li>
        <li className="form-input">
          <p>Тип БпЛА:</p>
          <Select
            stylization="input-field"
            name="unitType"
            defaultValue="Выберите тип"
            value={values.unitType || null}
            options={data ? data.types : []}
            onChange={handleInputValue}
          />
        </li>
      </ul>
      <div className="form-buttons">
        <PrimaryButton stylization="form-submit-button" onClick={handleSubmitUnitType}>
          Добавить
        </PrimaryButton>
      </div>
    </div>
  );
};

InputUnitRoleForm.propTypes = {
  stylization: PropTypes.string,
  onClose: PropTypes.func
};

InputUnitRoleForm.defaultProps = {
  stylization: '',
  onClose: () => {}
};

export default InputUnitRoleForm;
