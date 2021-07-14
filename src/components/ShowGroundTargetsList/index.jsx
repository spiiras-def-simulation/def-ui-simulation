import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.css';

const groundTargets = [
  { id: 102, status: 'active' },
  { id: 103, status: 'active' },
  { id: 104, status: 'active' },
  { id: 105, status: 'active' },
  { id: 106, status: 'active' }
];

const ShowGroundTargetsList = ({ stylization, onClose }) => {
  return (
    <div className={classNames('show-ground-targets-list', stylization)}>
      <div className="list-title">
        <span className="title">Список наземных целей</span>
        <button className="close-button" type="button" onClick={onClose}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
      </div>
      <div className="targets-list">
        {groundTargets
          .map((target, order) => ({ order: order + 1, ...target }))
          .map(({ order, id }) => (
            <p key={order} className="target-record">
              <span>
                {order}. ID {id}
              </span>
              <button type="button" className="show-button">
                Показать
              </button>
            </p>
          ))}
      </div>
    </div>
  );
};

ShowGroundTargetsList.propTypes = {
  stylization: PropTypes.string,
  onClose: PropTypes.func
};

ShowGroundTargetsList.defaultProps = {
  stylization: '',
  onClose: () => {}
};

export default ShowGroundTargetsList;
