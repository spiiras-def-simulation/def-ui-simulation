import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useQuery } from '@apollo/client';
import Control from 'react-leaflet-control';

import ControlPanel from '../ControlPanel';
import UnitRecord from '../UnitRecord';

import { GET_UNITS_GROUP_STATUS } from './requests';

import './index.css';

const UnitsGroupStatusControl = ({ stylization, position, opened }) => {
  const { data } = useQuery(GET_UNITS_GROUP_STATUS);

  const { mission = null } = data || {};
  return (
    <Control position={position}>
      <ControlPanel
        stylization={classNames('units-group-status-control', stylization)}
        title="Состав боевой группы"
        opened={opened}
      >
        <div className="status-description">
          {mission && (
            <div className="status-list">
              {mission.units.map(({ id }) => (
                <UnitRecord key={id} stylization="status-element" id={id} />
              ))}
            </div>
          )}
        </div>
      </ControlPanel>
    </Control>
  );
};

UnitsGroupStatusControl.propTypes = {
  stylization: PropTypes.string,
  position: PropTypes.string,
  opened: PropTypes.bool
};

UnitsGroupStatusControl.defaultProps = {
  stylization: '',
  position: '',
  opened: false
};

export default UnitsGroupStatusControl;
