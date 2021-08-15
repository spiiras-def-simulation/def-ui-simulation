import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.css';

const LocationFormField = ({ name, stylization, value, status, onChangeStatus }) => {
  return (
    <div className={classNames('input-location-form-field', stylization)}>
      <div className="inputs-location">
        <input type="text" placeholder="x" name="x" disabled value={value ? value.x : ''} />
        <input type="text" placeholder="y" name="y" disabled value={value ? value.y : ''} />
      </div>
      <button
        className={classNames('status-button', status && 'active-button')}
        type="button"
        onClick={() => onChangeStatus(name)}
      >
        <i className="fa fa-bullseye" />
      </button>
    </div>
  );
};

LocationFormField.propTypes = {
  name: PropTypes.string,
  stylization: PropTypes.string,
  value: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  }),
  status: PropTypes.bool,
  onChangeStatus: PropTypes.func
};

LocationFormField.defaultProps = {
  name: null,
  stylization: '',
  value: null,
  status: false,
  onChangeStatus: () => {}
};

export default LocationFormField;
