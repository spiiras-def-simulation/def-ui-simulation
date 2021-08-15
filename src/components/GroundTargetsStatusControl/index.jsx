import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Control from 'react-leaflet-control';

import ControlPanel from '../ControlPanel';

import './index.css';

const GroundTargetsStatusControl = ({ stylization, position, opened }) => {
  return (
    <Control position={position}>
      <ControlPanel
        stylization={classNames('ground-targets-status-control', stylization)}
        title="Список обнаруженных целей"
        opened={opened}
      >
        <div className="status-description"></div>
      </ControlPanel>
    </Control>
  );
};

GroundTargetsStatusControl.propTypes = {
  stylization: PropTypes.string,
  position: PropTypes.string,
  opened: PropTypes.bool
};

GroundTargetsStatusControl.defaultProps = {
  stylization: '',
  position: '',
  opened: false
};

export default GroundTargetsStatusControl;
