import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Control from 'react-leaflet-control';

import ControlPanel from '../ControlPanel';
import MissionProblemsListWithData from '../MissionProblemsListWithData';

import './index.css';

const MissionProblemsControl = ({ id, stylization, position }) => {
  return (
    <Control position={position}>
      <ControlPanel
        stylization={classNames('units-problems-control', stylization)}
        title="Список критических проблем"
      >
        <div className="control-content">
          <MissionProblemsListWithData id={id} />
        </div>
      </ControlPanel>
    </Control>
  );
};

MissionProblemsControl.propTypes = {
  id: PropTypes.string.isRequired,
  stylization: PropTypes.string,
  position: PropTypes.string
};

MissionProblemsControl.defaultProps = {
  stylization: '',
  position: 'topright'
};

export default MissionProblemsControl;
