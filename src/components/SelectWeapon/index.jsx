import React from 'react';
import { useQuery } from '@apollo/client';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { GET_COMBAT_UNIT_WEAPONS } from './requests';

import './index.css';

const SelectWeapon = ({ stylization, name, value, onChange }) => {
  const { data } = useQuery(GET_COMBAT_UNIT_WEAPONS);

  return (
    <select
      className={classNames('select-weapon', stylization)}
      name={name}
      value={value || 'Выберите тип'}
      onChange={onChange}
      disabled={!data}
    >
      <option disabled>Выберите тип</option>
      {data &&
        data.weapons.map(weapon => (
          <option value={weapon.id} key={weapon.id}>
            {weapon.name}
          </option>
        ))}
    </select>
  );
};

SelectWeapon.propTypes = {
  name: PropTypes.string.isRequired,
  stylization: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

SelectWeapon.defaultProps = {
  stylization: '',
  value: '',
  onChange: () => {}
};

export default SelectWeapon;
