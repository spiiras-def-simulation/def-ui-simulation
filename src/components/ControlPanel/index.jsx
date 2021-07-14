import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.css';

const ControlPanel = ({ stylization, title, children }) => {
  const [opened, setPanelState] = useState(true);

  return (
    <div className={classNames('control-panel', stylization)}>
      <div className="panel-title">
        <span className="title">{title}</span>
        <button className="close-button" type="button" onClick={() => setPanelState(!opened)}>
          {opened ? <i className="fas fa-angle-up" /> : <i className="fas fa-angle-down" />}
        </button>
      </div>
      {opened && <div className="panel-content">{children}</div>}
    </div>
  );
};

ControlPanel.propTypes = {
  stylization: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};

ControlPanel.defaultProps = {
  stylization: ''
};

export default ControlPanel;
