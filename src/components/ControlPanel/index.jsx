import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.css';

const ControlPanel = ({ stylization, title, children, opened }) => {
  const [isOpened, setPanelState] = useState(opened);

  return (
    <div className={classNames('control-panel', stylization)}>
      <button className="panel-title" type="button" onClick={() => setPanelState(!isOpened)}>
        <span className="title">{title}</span>
        <p className="close-status">
          {isOpened ? <i className="fas fa-angle-up" /> : <i className="fas fa-angle-down" />}
        </p>
      </button>
      {isOpened && <div className="panel-content">{children}</div>}
    </div>
  );
};

ControlPanel.propTypes = {
  stylization: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  opened: PropTypes.bool
};

ControlPanel.defaultProps = {
  stylization: '',
  opened: true
};

export default ControlPanel;
