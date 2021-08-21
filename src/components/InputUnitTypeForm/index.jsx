import React, { useState, useCallback } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import PrimaryButton from '../PrimaryButton';
import Select from '../Select';

import { GET_COMBAT_UNIT_WEAPONS, ADD_UNIT_TYPE } from './requests';

import './index.css';

const InputUnitTypeForm = ({ stylization, onClose }) => {
  const [values, setValues] = useState({});
  const { data } = useQuery(GET_COMBAT_UNIT_WEAPONS);
  const [addUnitType] = useMutation(ADD_UNIT_TYPE);

  const handleInputValue = useCallback(
    ({ target }) => {
      const nextState = { ...values };
      nextState[target.name] = target.value;
      setValues(nextState);
    },
    [values]
  );
  const handleInputNumber = useCallback(
    ({ target }) => {
      const nextState = { ...values };
      nextState[target.name] = parseInt(target.value, 10);
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

    addUnitType({ variables: { input: inputValues } });
  }, [values, addUnitType]);

  return (
    <form className={classNames('input-unit-type-form', stylization)}>
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
              value={
                values.rangeVelocityMin ||
                (values.rangeVelocityMin === 0 ? values.rangeVelocityMin : '')
              }
              onChange={handleInputNumber}
            />
            <input
              className="input-field"
              type="number"
              name="rangeVelocityMax"
              placeholder="макс"
              value={
                values.rangeVelocityMax ||
                (values.rangeVelocityMax === 0 ? values.rangeVelocityMax : '')
              }
              onChange={handleInputNumber}
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
              value={
                values.rangeVelocityUpVerticalMin ||
                (values.rangeVelocityUpVerticalMin === 0 ? values.rangeVelocityUpVerticalMin : '')
              }
              onChange={handleInputNumber}
            />
            <input
              className="input-field"
              type="number"
              name="rangeVelocityUpVerticalMax"
              placeholder="макс"
              value={
                values.rangeVelocityUpVerticalMax ||
                (values.rangeVelocityUpVerticalMax === 0 ? values.rangeVelocityUpVerticalMax : '')
              }
              onChange={handleInputNumber}
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
              value={
                values.rangeVelocityDownVerticalMin ||
                (values.rangeVelocityDownVerticalMin === 0
                  ? values.rangeVelocityDownVerticalMin
                  : '')
              }
              onChange={handleInputNumber}
            />
            <input
              className="input-field"
              type="number"
              name="rangeVelocityDownVerticalMax"
              placeholder="макс"
              value={
                values.rangeVelocityDownVerticalMax ||
                (values.rangeVelocityDownVerticalMax === 0
                  ? values.rangeVelocityDownVerticalMax
                  : '')
              }
              onChange={handleInputNumber}
            />
          </div>
        </li>
        <li className="form-input">
          <p>Тип груза:</p>
          <Select
            stylization="input-field"
            name="cargoType"
            value={values.cargoType}
            defaultValue="Выберите тип груза"
            options={data ? data.weapons : []}
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
            value={
              values.maxCargoQuantity ||
              (values.maxCargoQuantity === 0 ? values.maxCargoQuantity : '')
            }
            onChange={handleInputNumber}
          />
        </li>
        <li className="form-input">
          <p>Расход топлива/энергии (ед. ресурса в час):</p>
          <input
            className="input-field"
            type="number"
            name="maxFuelConsume"
            placeholder="макс"
            value={
              values.maxFuelConsume || (values.maxFuelConsume === 0 ? values.maxFuelConsume : '')
            }
            onChange={handleInputNumber}
          />
        </li>
        <li className="form-input">
          <p>Ресурс топлива (ч):</p>
          <input
            className="input-field"
            type="number"
            name="maxFuelResourse"
            placeholder="макс"
            value={
              values.maxFuelResourse || (values.maxFuelResourse === 0 ? values.maxFuelResourse : '')
            }
            onChange={handleInputNumber}
          />
        </li>
        <li className="form-input">
          <p>Радиус разворота (м):</p>
          <input
            className="input-field"
            type="number"
            name="maxTurningRadius"
            placeholder="макс"
            value={
              values.maxTurningRadius ||
              (values.maxTurningRadius === 0 ? values.maxTurningRadius : '')
            }
            onChange={handleInputNumber}
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
