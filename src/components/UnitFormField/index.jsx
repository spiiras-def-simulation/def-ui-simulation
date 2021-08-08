import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useQuery } from '@apollo/client';

import Select from '../Select';

import { GET_UNIT_ROLES } from './requests';

import './index.css';

const UnitFormField = ({ stylization, value, onChange, onClose }) => {
  const { data } = useQuery(GET_UNIT_ROLES);

  const handleChangeValue = useCallback(
    e => {
      const updated = { ...value };
      updated[e.target.name] = e.target.value;
      onChange(updated);
    },
    [value, onChange]
  );

  const roleOptions = useMemo(() => {
    const { roles = [] } = data || {};
    return roles.map(({ id, name, unitType }) => ({
      id,
      name: `${name} (${unitType.name})`
    }));
  }, [data]);

  return (
    <div className={classNames('unit-form-field', stylization)}>
      <div className="input-values">
        <Select
          stylization="input-value input-select"
          name="role"
          defaultValue="Выберите роль"
          value={value.role}
          options={roleOptions}
          onChange={handleChangeValue}
        />
        <input
          className="input-value input-number"
          name="number"
          type="text"
          value={value.number || ''}
          placeholder="Кол."
          onChange={handleChangeValue}
        />
      </div>
      <button className="close-button" type="button" onClick={onClose}>
        <i className="fas fa-times" />
      </button>
    </div>
  );
};

UnitFormField.propTypes = {
  stylization: PropTypes.string,
  value: PropTypes.shape({
    role: PropTypes.string,
    type: PropTypes.string,
    number: PropTypes.string
  }),
  onChange: PropTypes.func,
  onClose: PropTypes.func
};

UnitFormField.defaultProps = {
  stylization: '',
  value: {},
  onChange: () => {},
  onClose: () => {}
};

export default UnitFormField;
