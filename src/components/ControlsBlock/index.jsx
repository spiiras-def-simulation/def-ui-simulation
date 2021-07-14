import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import './index.css';

const ControlsBlock = ({ children }) => {
  const [activePanel, setActivePanel] = useState(null);

  const closePanel = useCallback(() => {
    setActivePanel(null);
  }, []);

  return <>{children(activePanel, setActivePanel, closePanel)}</>;
};

ControlsBlock.propTypes = {
  children: PropTypes.func.isRequired
};

export default ControlsBlock;
