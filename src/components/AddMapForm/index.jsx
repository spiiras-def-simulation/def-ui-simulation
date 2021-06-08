import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.css';

const AddMapForm = ({ stylization, onClose }) => (
  <form className={classNames('add-map-form', stylization)}>
    <div className="form-title">
      <span className="title">Ввести расположение местности</span>
      <button className="close-button" type="button" onClick={onClose}>
        <i className="fa fa-times" aria-hidden="true"></i>
      </button>
    </div>
    <ul className="inputs-list">
      <li className="form-input">
        <p>Идентификатор:</p>
        <input type="text" />
      </li>
    </ul>
    <div className="form-buttons">
      <button className="form-submit" type="button">
        Добавить
      </button>
    </div>
  </form>
);

AddMapForm.propTypes = {
  stylization: PropTypes.string,
  onClose: PropTypes.func
};

AddMapForm.defaultProps = {
  stylization: '',
  onClose: () => {}
};

export default AddMapForm;
