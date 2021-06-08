import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import PrimaryButton from '../PrimaryButton';

import './index.css';

const InputMissionForm = ({ stylization, onClose }) => {
  return (
    <form className={classNames('input-mission-form', stylization)}>
      <div className="form-title">
        <span className="title">Параметры боевой задачи</span>
        <button className="close-button" type="button" onClick={onClose}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
      </div>
      <ul className="inputs-list">
        <li className="form-input">
          <p>Число катапуль для запуска БПЛА:</p>
          <input type="number" placeholder="0" />
        </li>
        <li className="form-input">
          <p>Интервал запуска БпЛА с катапульты (с):</p>
          <input type="number" placeholder="0" />
        </li>
        <li className="form-input">
          <p>Число одновременно запускаемых БпЛА:</p>
          <input type="number" placeholder="0" />
        </li>
        <li className="form-input">
          <p>Макс. время на выполнение (с):</p>
          <input type="number" placeholder="0" />
        </li>
        <li className="form-input">
          <p>Гарантир. уровень выполнения ЦЗ (%):</p>
          <input type="number" placeholder="0" />
        </li>
      </ul>
      <div className="form-buttons">
        <PrimaryButton stylization="form-submit">Установить</PrimaryButton>
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
