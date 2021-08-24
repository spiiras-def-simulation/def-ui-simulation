import React from 'react';
import PropTypes from 'prop-types';

import { printPoint } from './utils';

const PointRecord = ({ point, size }) => <span>{printPoint(point, size)}</span>;

PointRecord.propTypes = {
  point: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
  size: PropTypes.number
};

PointRecord.defaultProps = {
  size: 8
};

export default PointRecord;
