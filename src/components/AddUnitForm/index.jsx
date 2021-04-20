import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.css';

const AddUnitForm = ({ stylization, onClose }) => (
  <form className={classNames('add-unit-form', stylization)}>
    <div className="form-title">
      <span className="title">Добавление нового БпЛА</span>
      <button className="close-button" type="button" onClick={onClose}>
        <i className="fa fa-times" aria-hidden="true"></i>
      </button>
    </div>
    <ul className="inputs-list">
      <li className="form-input">
        <p>Идентификатор:</p>
        <input type="text" />
      </li>
      <li className="form-input">
        <p>Тип устройства БпЛА:</p>
        <select label="typeVehicle">
          <option>Самолёты</option>
          <option>Мультироторные</option>
        </select>
      </li>
      <li className="form-input">
        <p>Роль БпЛА:</p>
        <select label="roleVehicle">
          <option>Разведчики</option>
          <option>Ударные</option>
        </select>
      </li>
    </ul>
    <div className="form-buttons">
      <button className="form-submit" type="button">
        Добавить
      </button>
    </div>
  </form>
);

AddUnitForm.propTypes = {
  stylization: PropTypes.string,
  onClose: PropTypes.func
};

AddUnitForm.defaultProps = {
  stylization: '',
  onClose: () => {}
};

export default AddUnitForm;
