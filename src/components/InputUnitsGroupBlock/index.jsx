import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useQuery } from '@apollo/client';

import Select from '../Select';

import { GET_COMBAT_UNITS } from './requests';

import './index.css';

const InputUnitsGroupBlock = ({
  stylization,
  title,
  values,
  role,
  roleOptions,
  onUpdateRole,
  onUpdateUnits
}) => {
  const { data } = useQuery(GET_COMBAT_UNITS);

  const handleChangeRole = useCallback(
    event => {
      onUpdateRole(event.target.value);
    },
    [onUpdateRole]
  );

  const handleSelectUnit = useCallback(
    event => {
      const { name: selected } = event.target;
      const updated = values.includes(selected)
        ? values.filter(value => value !== selected)
        : [...values, selected];
      onUpdateUnits(updated);
    },
    [values, onUpdateUnits]
  );

  const unitOptions = useMemo(() => {
    const { units = [] } = data || {};
    return units.filter(({ role: unitRole }) => unitRole.id === role);
  }, [role, data]);

  return (
    <div className={classNames('input-units-group-block', stylization)}>
      <div className="input-block">
        <p>{title}</p>
        <Select
          stylization="input-value"
          name="role"
          defaultValue="Выберите тип"
          value={role}
          options={roleOptions}
          onChange={handleChangeRole}
        />
      </div>
      <div className="input-block">
        {role && (
          <ul className="input-options">
            {unitOptions.map(({ id, tailNumber }) => (
              <li key={id} className="input-option">
                <input
                  type="checkbox"
                  name={id}
                  checked={!!values.includes(id)}
                  onChange={handleSelectUnit}
                />
                <span>
                  ID: {id}
                  {tailNumber ? `, Борт. номер: ${tailNumber}` : ''}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

InputUnitsGroupBlock.propTypes = {
  stylization: PropTypes.string,
  title: PropTypes.string,
  values: PropTypes.arrayOf(PropTypes.string),
  role: PropTypes.string,
  roleOptions: PropTypes.arrayOf(PropTypes.shape({})),
  onUpdateRole: PropTypes.func,
  onUpdateUnits: PropTypes.func
};

InputUnitsGroupBlock.defaultProps = {
  stylization: '',
  title: '',
  values: [],
  role: null,
  roleOptions: [],
  onUpdateRole: () => {},
  onUpdateUnits: () => {}
};

export default InputUnitsGroupBlock;
