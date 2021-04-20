import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.css';

const MissionDescriptor = ({ name, stage, stylization }) => (
  <div className={classNames('mission-descriptor', stylization)}>
    <span>
      {name}, этап {stage}
    </span>
    <button type="button">Показать</button>
  </div>
);

MissionDescriptor.propTypes = {
  name: PropTypes.string.isRequired,
  stage: PropTypes.number.isRequired,
  stylization: PropTypes.string
};

MissionDescriptor.defaultProps = {
  stylization: ''
};

export default MissionDescriptor;
