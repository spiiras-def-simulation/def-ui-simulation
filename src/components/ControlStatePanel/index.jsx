import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.css';

const ControlStatePanel = ({ stylization, children }) => (
  <div className={classNames('control-state-panel modal-theme', stylization)}>{children}</div>
);

ControlStatePanel.propTypes = {
  children: PropTypes.element.isRequired,
  stylization: PropTypes.string
};

ControlStatePanel.defaultProps = {
  stylization: ''
};

export default ControlStatePanel;
