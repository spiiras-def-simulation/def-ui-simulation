import React, { useContext, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import UnitFormField from '../UnitFormField';

import Context from '../ViewInputUnits/context';
import { events } from '../ViewInputUnits/reducer';

import createIdentyFactory from './createIdentyFactory';
import './index.css';

const createIndenty = createIdentyFactory();

const UnitGroupFormFields = ({ stylization }) => {
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    dispatch({
      type: events.SET_FORM_VALUE,
      name: 'units',
      value: [{ id: createIndenty(), role: null, number: null }]
    });
  }, [dispatch]);

  const { units } = state.values;

  const handleOnAddUnit = useCallback(() => {
    const saved = { ...units };
    saved[createIndenty()] = {};
    dispatch({ type: events.SET_FORM_VALUE, name: 'units', value: saved });
  }, [units, dispatch]);

  const handleOnChangeUnit = useCallback(
    (id, value) => {
      const saved = { ...units };
      saved[id] = value;
      dispatch({ type: events.SET_FORM_VALUE, name: 'units', value: saved });
    },
    [units, dispatch]
  );

  const handleOnRemoveUnit = useCallback(
    id => {
      const saved = { ...units };
      delete saved[id];
      dispatch({ type: events.SET_FORM_VALUE, name: 'units', value: saved });
    },
    [units, dispatch]
  );

  return (
    <div className={classNames('units-group-form-fields', stylization)}>
      {Object.entries(units)
        .map(([id, value]) => ({ id, ...value }))
        .map(value => (
          <UnitFormField
            key={value.id}
            stylization="input-field"
            value={value}
            onChange={field => handleOnChangeUnit(value.id, field)}
            onClose={() => handleOnRemoveUnit(value.id)}
          />
        ))}
      <button className="add-field-button" type="button" onClick={handleOnAddUnit}>
        Добавить группу
      </button>
    </div>
  );
};

UnitGroupFormFields.propTypes = {
  stylization: PropTypes.string
};

UnitGroupFormFields.defaultProps = {
  stylization: ''
};

export default UnitGroupFormFields;
