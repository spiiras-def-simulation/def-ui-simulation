import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Control from 'react-leaflet-control';

import ControlPanel from '../ControlPanel';
import DetectedTargetsListWithData from '../DetectedTargetsListWithData';

import './index.css';

const DetectedTargetsStatusControl = ({ stylization, position, opened }) => (
  <Control position={position}>
    <ControlPanel
      stylization={classNames('ground-targets-status-control', stylization)}
      title="Список обнаруженных целей"
      opened={opened}
    >
      <DetectedTargetsListWithData stylization="status-detected-list" />
    </ControlPanel>
  </Control>
);

DetectedTargetsStatusControl.propTypes = {
  stylization: PropTypes.string,
  position: PropTypes.string,
  opened: PropTypes.bool
};

DetectedTargetsStatusControl.defaultProps = {
  stylization: '',
  position: '',
  opened: false
};

export default DetectedTargetsStatusControl;
