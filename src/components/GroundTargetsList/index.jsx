import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useQuery } from '@apollo/client';

import GroundTargetRecordWithData from '../GroundTargetRecordWithData';

import { GET_TARGET_OBJECTS } from './requests';

import './index.css';

const GroundTargetsList = ({ stylization, onClose }) => {
  const { data, error, loading } = useQuery(GET_TARGET_OBJECTS);

  if (error || loading) return null;

  const { objects } = data;
  return (
    <div className={classNames('ground-targets-list', stylization)}>
      <div className="list-title">
        <span className="title">Список наземных целей</span>
        <button className="close-button" type="button" onClick={onClose}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
      </div>
      <div className="list-records">
        {objects.map(({ id }) => (
          <GroundTargetRecordWithData key={id} id={id} stylization="list-record" />
        ))}
      </div>
    </div>
  );
};

GroundTargetsList.propTypes = {
  stylization: PropTypes.string,
  onClose: PropTypes.func
};

GroundTargetsList.defaultProps = {
  stylization: '',
  onClose: () => {}
};

export default GroundTargetsList;
