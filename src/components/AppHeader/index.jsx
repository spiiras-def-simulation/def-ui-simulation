import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.css';

const AppHeader = ({ stylization }) => (
  <div className={classNames('app-header-info', stylization)} />
);

AppHeader.propTypes = {
  stylization: PropTypes.string
};

AppHeader.defaultProps = {
  stylization: ''
};

export default AppHeader;
