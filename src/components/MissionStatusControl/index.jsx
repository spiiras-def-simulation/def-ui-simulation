import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Control from 'react-leaflet-control';

import ControlPanel from '../ControlPanel';

import './index.css';

const MissionStatusControl = ({ stylization, position, opened }) => {
  return (
    <Control position={position}>
      <ControlPanel
        stylization={classNames('mission-status-control', stylization)}
        title="Информация о боевой задаче"
        opened={opened}
      >
        <div className="status-description"></div>
      </ControlPanel>
    </Control>
  );
};

MissionStatusControl.propTypes = {
  stylization: PropTypes.string,
  position: PropTypes.string,
  opened: PropTypes.bool
};

MissionStatusControl.defaultProps = {
  stylization: '',
  position: '',
  opened: false
};

export default MissionStatusControl;
