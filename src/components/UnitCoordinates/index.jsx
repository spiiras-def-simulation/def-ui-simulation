// import React, { useEffect } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

import PointRecord from '../PointRecord';

const UnitCoordinates = ({ position }) => {
  // useEffect(() => subToUpdate(), [subToUpdate]);
  return position ? <PointRecord point={position} /> : 'Неизвестное положение';
};

UnitCoordinates.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  })
  // subToUpdate: PropTypes.func
};

UnitCoordinates.defaultProps = {
  position: null
  // subToUpdate: () => {}
};

export default UnitCoordinates;
