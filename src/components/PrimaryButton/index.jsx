import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '../Button';

import './index.css';

const PrimaryButton = ({ stylization, onClick, children }) => (
  <Button stylization={classNames('primary-button', stylization)} onClick={onClick}>
    {children}
  </Button>
);

PrimaryButton.propTypes = {
  stylization: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
};

PrimaryButton.defaultProps = {
  stylization: '',
  onClick: () => {},
  children: ''
};

export default PrimaryButton;
