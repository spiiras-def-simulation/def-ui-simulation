import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '../Button';

import './index.css';

const AppHeader = ({ stylization }) => (
  <div className={classNames('app-header-info', stylization)}>
    <div className="user-status">
      <Button stylization="user-status-element user-status-button">
        <i className="fas fa-cog" />
      </Button>
      <Button stylization="user-status-element user-status-button">
        <i className="fas fa-bell" />
      </Button>
      <Button stylization="user-status-element user-exit-button">Выход</Button>
    </div>
  </div>
);

AppHeader.propTypes = {
  stylization: PropTypes.string
};

AppHeader.defaultProps = {
  stylization: ''
};

export default AppHeader;
