import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import StateControl from '../StateControl';

import './index.css';

const RefControl = ({ stylization, name, label, reference }) => {
  return (
    <Link to={reference} className="ref-control">
      <StateControl stylization={stylization} name={name} label={label} />
    </Link>
  );
};

RefControl.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  stylization: PropTypes.string,
  reference: PropTypes.string
};

RefControl.defaultProps = {
  stylization: '',
  reference: ''
};

export default RefControl;
