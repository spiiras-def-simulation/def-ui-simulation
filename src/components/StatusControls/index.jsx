import React from 'react';
import PropTypes from 'prop-types';
import Control from 'react-leaflet-control';

import MissionStatus from '../MissionStatus';
import GroupStatus from '../GroupStatus';
import UnitStatus from '../UnitStatus';

import './index.css';

const StatusControls = ({ position }) => (
  <Control position={position}>
    <div className="status-controls">
      <MissionStatus stylization="status-panel modal-theme" />
      <GroupStatus stylization="status-panel modal-theme" />
      <UnitStatus stylization="status-panel modal-theme" />
    </div>
  </Control>
);

StatusControls.propTypes = {
  position: PropTypes.string
};

StatusControls.defaultProps = {
  position: 'topright'
};

export default StatusControls;
