import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import PrimaryButton from '../PrimaryButton';

import './index.css';

const AddGroundTargetForm = ({ stylization, onClose }) => (
  <form className={classNames('add-ground-target-form', stylization)}>
    <div className="form-title">
      <span className="title">Создание наземной цели</span>
      <button className="close-button" type="button" onClick={onClose}>
        <i className="fa fa-times" aria-hidden="true"></i>
      </button>
    </div>
    <ul className="inputs-list">
      <li className="form-input">
        <p>Наименование:</p>
        <input type="text" />
      </li>
    </ul>
    <div className="form-buttons">
      <PrimaryButton stylization="form-submit-button primary-button">Добавить</PrimaryButton>
    </div>
  </form>
);

AddGroundTargetForm.propTypes = {
  stylization: PropTypes.string,
  onClose: PropTypes.func
};

AddGroundTargetForm.defaultProps = {
  stylization: '',
  onClose: () => {}
};

export default AddGroundTargetForm;
