import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import PrimaryButton from '../PrimaryButton';

import './index.css';

const SetLocationPosition = ({ stylization, onSetLocation, onClose }) => {
  const [values, setValues] = useState({});

  const handleLocationValue = useCallback(
    event => {
      const inputName = event.target.name;
      const inputValue = event.target.value;
      const nextState = { ...values };
      nextState[inputName] = inputValue;
      setValues(nextState);
    },
    [values, setValues]
  );

  const setLocationPosition = useCallback(() => {
    onSetLocation(values);
  }, [values, onSetLocation]);

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
            <input
              type="text"
              placeholder="x"
              name="posTopLeftX"
              value={values.posTopLeftX !== undefined ? values.posTopLeftX : ''}
              onChange={handleLocationValue}
            />
            <input
              type="text"
              placeholder="y"
              name="posTopLeftY"
              value={values.posTopLeftY !== undefined ? values.posTopLeftY : ''}
              onChange={handleLocationValue}
            />
          </div>
        </li>
        <li className="form-input">
          <p>Координаты нижнего правого угла:</p>
          <div className="input-coordinates">
            <input
              type="text"
              placeholder="x"
              name="posBottomRightX"
              value={values.posBottomRightX !== undefined ? values.posBottomRightX : ''}
              onChange={handleLocationValue}
            />
            <input
              type="text"
              placeholder="y"
              name="posBottomRightY"
              value={values.posBottomRightY !== undefined ? values.posBottomRightY : ''}
              onChange={handleLocationValue}
            />
          </div>
        </li>
      </ul>
      <div className="form-buttons">
        <PrimaryButton stylization="form-submit" onClick={setLocationPosition}>
          Установить
        </PrimaryButton>
      </div>
    </form>
  );
};

SetLocationPosition.propTypes = {
  stylization: PropTypes.string,
  onSetLocation: PropTypes.func,
  onClose: PropTypes.func
};

SetLocationPosition.defaultProps = {
  stylization: '',
  onSetLocation: () => {},
  onClose: () => {}
};

export default SetLocationPosition;
