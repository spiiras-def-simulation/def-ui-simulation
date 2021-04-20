import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.css';

const StateControl = ({ stylization, name, label, activeControl, onChoose, children }) => {
  const isActive = name === activeControl;
  return (
    <div className={classNames('state-control', isActive && 'active', stylization)}>
      <button className="control-button" type="button" onClick={() => onChoose(name)}>
        <span>{label}</span>
      </button>
      {isActive && children}
    </div>
  );
};

StateControl.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  stylization: PropTypes.string,
  activeControl: PropTypes.string,
  onChoose: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
};

StateControl.defaultProps = {
  stylization: '',
  activeControl: null,
  onChoose: () => {},
  children: null
};

export default StateControl;
