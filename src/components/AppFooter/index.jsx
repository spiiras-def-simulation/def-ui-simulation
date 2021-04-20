import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.css';

const AppFooter = ({ stylization }) => (
  <div className={classNames('app-footer-info', stylization)} />
);

AppFooter.propTypes = {
  stylization: PropTypes.string
};

AppFooter.defaultProps = {
  stylization: ''
};

export default AppFooter;
