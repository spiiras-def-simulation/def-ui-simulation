import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.css';

const StateControl = ({ stylization, name, label, active, onChoose, onClose, children }) => {
  return (
    <div className={classNames('state-control', active && 'active', stylization)}>
      <button
        className="control-button"
        type="button"
        onClick={() => (active ? onClose() : onChoose(name))}
      >
        <span>{label}</span>
      </button>
      {active && children}
    </div>
  );
};

StateControl.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  stylization: PropTypes.string,
  active: PropTypes.bool,
  onChoose: PropTypes.func,
  onClose: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
};

StateControl.defaultProps = {
  stylization: '',
  active: false,
  onChoose: () => {},
  onClose: () => {},
  children: null
};

export default StateControl;
