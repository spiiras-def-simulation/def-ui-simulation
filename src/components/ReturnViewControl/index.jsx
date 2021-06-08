import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Control from 'react-leaflet-control';
import { Link } from 'react-router-dom';

import './index.css';

const ReturnViewControl = ({ position, stylization }) => (
  <Control position={position}>
    <Link to="/operation" className={classNames('return-view-control', stylization)}>
      <i className="fas fa-eye" />
      <span>Вернуться к наблюдению</span>
    </Link>
  </Control>
);

ReturnViewControl.propTypes = {
  position: PropTypes.string,
  stylization: PropTypes.string
};

ReturnViewControl.defaultProps = {
  position: 'topleft',
  stylization: ''
};

export default ReturnViewControl;
