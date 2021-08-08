import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Control from 'react-leaflet-control';

import ControlPanel from '../ControlPanel';

import './index.css';

const UnitsGroupStatusControl = ({ stylization, position, opened }) => {
  return (
    <Control position={position}>
      <ControlPanel
        stylization={classNames('units-group-status-control', stylization)}
        title="Информация о боевой группе"
        opened={opened}
      >
        <div className="status-description"></div>
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
