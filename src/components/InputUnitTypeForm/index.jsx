import React, { useState, useCallback } from 'react';
import { useMutation } from '@apollo/client';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import PrimaryButton from '../PrimaryButton';
import SelectWeapon from '../SelectWeapon';

import { ADD_UNIT_TYPE } from './requests';

import './index.css';

const InputUnitTypeForm = ({ stylization, onClose }) => {
  const [addUnitType] = useMutation(ADD_UNIT_TYPE);
  const [values, setValues] = useState({});

  const handleInputValue = useCallback(
    ({ target }) => {
      const nextState = { ...values };
      nextState[target.name] = target.value;
      setValues(nextState);
    },
    [values]
  );

  const handleSubmitUnitType = useCallback(() => {
    const {
      rangeVelocityMin: velMin,
      rangeVelocityMax: velMax,
      rangeVelocityUpVerticalMin: velUpVertMin,
      rangeVelocityUpVerticalMax: velUpVertMax,
      rangeVelocityDownVerticalMin: velDownVertMin,
      rangeVelocityDownVerticalMax: velDownVertMax,
      ...inputValues
    } = values;

    inputValues.rangeVelocity = [velMin, velMax];
    inputValues.rangeVelocityUpVertical = [velUpVertMin, velUpVertMax];
    inputValues.rangeVelocityDownVertical = [velDownVertMin, velDownVertMax];

    addUnitType({ variables: { input: { ...inputValues } } });
  }, [values, addUnitType]);

  return (
    <form className={classNames('add-unit-type-form', stylization)}>
      <div className="form-title">
        <span className="title">Создание нового типа БпЛА</span>
        <button className="close-button" type="button" onClick={onClose}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
      </div>
      <ul className="inputs-list">
        <li className="form-input">
          <p>Наименование:</p>
          <input
            className="input-field"
            type="text"
            name="name"
            value={values.name || ''}
            onChange={handleInputValue}
          />
        </li>
        <li className="form-input">
          <p>Горизонтальная скорость (м/с):</p>
          <div className="input-range">
            <input
              className="input-field"
              type="number"
              name="rangeVelocityMin"
              placeholder="мин"
              value={values.rangeVelocityMin || ''}
              onChange={handleInputValue}
            />
            <input
              className="input-field"
              type="number"
              name="rangeVelocityMax"
              placeholder="макс"
              value={values.rangeVelocityMax || ''}
              onChange={handleInputValue}
            />
          </div>
        </li>
        <li className="form-input">
          <p>Вертикальная скорость подъёма (м/с):</p>
          <div className="input-range">
            <input
              className="input-field"
              type="number"
              name="rangeVelocityUpVerticalMin"
              placeholder="мин"
              value={values.rangeVelocityUpVerticalMin || ''}
              onChange={handleInputValue}
            />
            <input
              className="input-field"
              type="number"
              name="rangeVelocityUpVerticalMax"
              placeholder="макс"
              value={values.rangeVelocityUpVerticalMax || ''}
              onChange={handleInputValue}
            />
          </div>
        </li>
        <li className="form-input">
          <p>Вертикальная скорость снижения (м/с):</p>
          <div className="input-range">
            <input
              className="input-field"
              type="number"
              name="rangeVelocityDownVerticalMin"
              placeholder="мин"
              value={values.rangeVelocityDownVerticalMin || ''}
              onChange={handleInputValue}
            />
            <input
              className="input-field"
              type="number"
              name="rangeVelocityDownVerticalMax"
              placeholder="макс"
              value={values.rangeVelocityDownVerticalMax || ''}
              onChange={handleInputValue}
            />
          </div>
        </li>
        <li className="form-input">
          <p>Тип груза:</p>
          <SelectWeapon
            stylization="input-field"
            name="cargoType"
            value={values.cargoType}
            onChange={handleInputValue}
          />
        </li>
        <li className="form-input">
          <p>Количество несомых единиц СГ:</p>
          <input
            className="input-field"
            type="number"
            name="maxCargoQuantity"
            placeholder="макс"
            value={values.maxCargoQuantity || ''}
            onChange={handleInputValue}
          />
        </li>
        <li className="form-input">
          <p>Расход топлива/энергии (ед. ресурса в час):</p>
          <input
            className="input-field"
            type="number"
            name="maxFuelConsume"
            placeholder="макс"
            value={values.maxFuelConsume || ''}
            onChange={handleInputValue}
          />
        </li>
        <li className="form-input">
          <p>Радиус разворота (м):</p>
          <input
            className="input-field"
            type="number"
            name="maxTurningRadius"
            placeholder="макс"
            value={values.maxTurningRadius || ''}
            onChange={handleInputValue}
          />
        </li>
      </ul>
      <div className="form-buttons">
        <PrimaryButton stylization="form-submit-button" onClick={handleSubmitUnitType}>
          Добавить
        </PrimaryButton>
      </div>
    </form>
  );
};

InputUnitTypeForm.propTypes = {
  stylization: PropTypes.string,
  onClose: PropTypes.func
};

InputUnitTypeForm.defaultProps = {
  stylization: '',
  onClose: () => {}
};

export default InputUnitTypeForm;
