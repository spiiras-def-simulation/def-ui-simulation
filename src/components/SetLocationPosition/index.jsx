import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import PrimaryButton from '../PrimaryButton';

import './index.css';

const SetLocationPosition = ({ stylization, onClose }) => {
  return (
    <form className={classNames('set-location-position-form', stylization)}>
      <div className="form-title">
        <span className="title">Установить положение местности</span>
        <button className="close-button" type="button" onClick={onClose}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
      </div>
      <ul className="inputs-list">
        <li className="form-input">
          <p>Координаты верхнего левого угла:</p>
          <div className="input-coordinates">
            <input type="text" placeholder="x" />
            <input type="text" placeholder="y" />
          </div>
        </li>
        <li className="form-input">
          <p>Координаты нижнего правого угла:</p>
          <div className="input-coordinates">
            <input type="text" placeholder="x" />
            <input type="text" placeholder="y" />
          </div>
        </li>
      </ul>
      <div className="form-buttons">
        <PrimaryButton stylization="form-submit">Установить</PrimaryButton>
      </div>
    </form>
  );
};

SetLocationPosition.propTypes = {
  stylization: PropTypes.string,
  onClose: PropTypes.func
};

SetLocationPosition.defaultProps = {
  stylization: '',
  onClose: () => {}
};

export default SetLocationPosition;
