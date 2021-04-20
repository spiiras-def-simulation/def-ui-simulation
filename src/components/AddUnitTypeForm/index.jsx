import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Range from 'react-input-range';

import './index.css';

const AddUnitTypeForm = ({ stylization }) => (
  <form className={classNames('add-unit-type-form', stylization)}>
    <div className="form-title">
      <span className="title">Добавление нового типа БпЛА</span>
      <i className="fa fa-times close-button" aria-hidden="true"></i>
    </div>
    <ul className="inputs-list">
      <li className="form-input">
        <p>Наименование:</p>
        <input type="text" />
      </li>
      <li className="form-input">
        <p>Горизонтальная скорость (м/с):</p>
        <Range maxValue={20} minValue={0} value={{ min: 10, max: 15 }} onChange={() => {}} />
      </li>
      <li className="form-input">
        <p>Вертикальная скорость подъёма (м/с):</p>
        <Range maxValue={20} minValue={0} value={{ min: 5, max: 15 }} onChange={() => {}} />
      </li>
      <li className="form-input">
        <p>Вертикальная скорость снижения (м/с):</p>
        <Range maxValue={20} minValue={0} value={{ min: 1, max: 10 }} onChange={() => {}} />
      </li>
      <li className="form-input">
        <p>Количество несомых единиц СГ:</p>
        <Range maxValue={20} minValue={0} value={10} onChange={() => {}} />
      </li>
      <li className="form-input">
        <p>Расход топлива/энергии (ед. ресурса в час):</p>
        <Range maxValue={20} minValue={0} value={15} onChange={() => {}} />
      </li>
      <li className="form-input">
        <p>Радиус разворота (м):</p>
        <Range maxValue={20} minValue={0} value={3} onChange={() => {}} />
      </li>
    </ul>
    <div className="form-buttons">
      <button className="form-submit" type="button">
        Добавить
      </button>
    </div>
  </form>
);

AddUnitTypeForm.propTypes = {
  stylization: PropTypes.string
};

AddUnitTypeForm.defaultProps = {
  stylization: ''
};

export default AddUnitTypeForm;
