import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.css';

const Select = ({ stylization, name, value, defaultValue, options, onChange }) => (
  <select
    className={classNames('select', stylization)}
    name={name}
    value={value || defaultValue}
    disabled={!options.length}
    onChange={onChange}
  >
    {defaultValue && <option disabled>{defaultValue}</option>}
    {options.map(option => (
      <option value={option.id} key={option.id}>
        {option.name}
      </option>
    ))}
  </select>
);

Select.propTypes = {
  name: PropTypes.string.isRequired,
  stylization: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string
    })
  ),
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

Select.defaultProps = {
  stylization: '',
  options: [],
  defaultValue: '',
  value: null,
  onChange: () => {}
};

export default Select;
