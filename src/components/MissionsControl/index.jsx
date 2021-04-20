import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Control from 'react-leaflet-control';

import MissionDescriptor from '../MissionDescriptor';

import './index.css';

const MissionsControl = ({ position, stylization }) => (
  <Control position={position}>
    <div className={classNames('missions-control', stylization)}>
      <div className="control-title">
        <span className="title">Боевые задания</span>
        <i className="fa fa-times close-button" aria-hidden="true"></i>
      </div>
      <MissionDescriptor name="Миссия 1" stage={3} />
      <MissionDescriptor name="Миссия 2" stage={1} />
      <MissionDescriptor name="Миссия 3" stage={3} />
    </div>
  </Control>
);

MissionsControl.propTypes = {
  position: PropTypes.string,
  stylization: PropTypes.string
};

MissionsControl.defaultProps = {
  position: 'topleft',
  stylization: ''
};

export default MissionsControl;
