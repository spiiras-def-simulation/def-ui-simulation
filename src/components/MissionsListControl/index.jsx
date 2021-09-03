import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Control from 'react-leaflet-control';

import ControlPanel from '../ControlPanel';
import MissionRecordsListWithData from '../MissionRecordsListWithData';

import './index.css';

const MissionsListControl = ({ stylization, position, onChooseMission }) => (
  <Control position={position}>
    <ControlPanel
      stylization={classNames('missions-list-control', stylization)}
      title="Список доступных миссий"
      opened
    >
      <div className="control-content">
        <MissionRecordsListWithData stylization="missions-list" onChooseMission={onChooseMission} />
      </div>
    </ControlPanel>
  </Control>
);

MissionsListControl.propTypes = {
  stylization: PropTypes.string,
  position: PropTypes.string,
  onChooseMission: PropTypes.func
};

MissionsListControl.defaultProps = {
  stylization: '',
  position: '',
  onChooseMission: () => {}
};

export default MissionsListControl;
