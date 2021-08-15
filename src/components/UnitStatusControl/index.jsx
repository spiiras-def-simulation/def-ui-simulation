import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Control from 'react-leaflet-control';

import ControlPanel from '../ControlPanel';

import './index.css';

const UnitStatusControl = ({ stylization, position, opened }) => {
  return (
    <Control position={position}>
      <ControlPanel
        stylization={classNames('unit-status-control', stylization)}
        title="Информация о выбранном БпЛА"
        opened={opened}
      >
        <div className="status-description"></div>
      </ControlPanel>
    </Control>
  );
};

UnitStatusControl.propTypes = {
  stylization: PropTypes.string,
  position: PropTypes.string,
  opened: PropTypes.bool
};

UnitStatusControl.defaultProps = {
  stylization: '',
  position: '',
  opened: false
};

export default UnitStatusControl;
