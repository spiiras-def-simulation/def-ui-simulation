import React, { useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useMutation } from '@apollo/client';
import Control from 'react-leaflet-control';

import ControlPanel from '../ControlPanel';
import PrimaryButton from '../PrimaryButton';
import UnitsGroupFormFields from '../UnitsGroupFormFields';
import LocationFormField from '../LocationFormField';

import MapContext from '../ViewMap/context';
import Context from '../ViewInputUnits/context';
import { events } from '../ViewInputUnits/reducer';

import { ADD_COMBAT_UNITS } from './requests';

import './index.css';

const InputUnitsForm = ({ position, stylization }) => {
  const { projection } = useContext(MapContext);
  const { state, dispatch } = useContext(Context);
  const [addUnits] = useMutation(ADD_COMBAT_UNITS);

  const { isSetPoint, values } = state;

  const handleSwitchSetPointStatus = useCallback(() => {
    dispatch({ type: events.SWITCH_SET_POINT_STATUS });
  }, [dispatch]);

  const handleSubmitUnits = useCallback(() => {
    const { units, location, ...inputValues } = values;

    inputValues.units = Object.values(units).map(({ role, number }) => ({ role, number }));
    inputValues.location = projection.unproject(location);

    addUnits({ variables: { input: inputValues } });
  }, [projection, values, addUnits]);

  const { location } = values;
  return (
    <Control position={position}>
      <ControlPanel
        stylization={classNames('input-units-form', stylization)}
        title="Добавление БпЛА"
      >
        <div className="form-controls">
          <ul className="inputs-list">
            <li className="form-input">
              <UnitsGroupFormFields />
            </li>
            <li className="form-input">
              <p>Точка взлёта:</p>
              <LocationFormField
                value={location}
                status={isSetPoint}
                onChangeStatus={handleSwitchSetPointStatus}
              />
            </li>
          </ul>
          <div className="form-buttons">
            <PrimaryButton stylization="form-submit-button" onClick={handleSubmitUnits}>
              Добавить
            </PrimaryButton>
          </div>
        </div>
      </ControlPanel>
    </Control>
  );
};

InputUnitsForm.propTypes = {
  position: PropTypes.string,
  stylization: PropTypes.string
};

InputUnitsForm.defaultProps = {
  position: 'topleft',
  stylization: ''
};

export default InputUnitsForm;
