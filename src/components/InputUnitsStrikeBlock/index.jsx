import React, { useContext, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';

import InputUnitsGroupBlock from '../InputUnitsGroupBlock';

import Context from '../ViewInputMission/context';
import events from '../ViewInputMission/events';

import { GET_UNIT_ROLES } from './requests';

const InputUnitsStrikeBlock = ({ stylization, values, onUpdateUnits }) => {
  const { state, dispatch } = useContext(Context);
  const { data } = useQuery(GET_UNIT_ROLES);

  const handleChangeRole = useCallback(
    role => {
      dispatch({ type: events.CHANGE_STRIKE_GROUP_ROLE, data: role });
    },
    [dispatch]
  );

  const roleOptions = useMemo(() => {
    const { roles = [] } = data || {};
    return roles
      .filter(({ name }) => name === 'Ударный')
      .map(({ id, name, unitType }) => ({
        id,
        name: `${name} (${unitType.name})`
      }));
  }, [data]);

  return (
    <InputUnitsGroupBlock
      stylization={stylization}
      title="Состав ударных:"
      values={values}
      role={state.units.strikeRole}
      roleOptions={roleOptions}
      onUpdateRole={handleChangeRole}
      onUpdateUnits={onUpdateUnits}
    />
  );
};

InputUnitsStrikeBlock.propTypes = {
  stylization: PropTypes.string,
  values: PropTypes.arrayOf(PropTypes.string),
  onUpdateUnits: PropTypes.func
};

InputUnitsStrikeBlock.defaultProps = {
  stylization: '',
  values: [],
  onUpdateUnits: () => {}
};

export default InputUnitsStrikeBlock;
