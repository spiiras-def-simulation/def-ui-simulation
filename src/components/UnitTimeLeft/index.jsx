import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const UnitTimeLeft = ({ timeLeft, subToUpdate }) => {
  useEffect(() => subToUpdate(), [subToUpdate]);
  return timeLeft ? (
    <span>Осталось {Math.round(timeLeft * 10 ** 4) / 10 ** 4}%</span>
  ) : (
    'Ост. время неизвестно'
  );
};

UnitTimeLeft.propTypes = {
  timeLeft: PropTypes.number,
  subToUpdate: PropTypes.func
};

UnitTimeLeft.defaultProps = {
  timeLeft: null,
  subToUpdate: () => {}
};

export default UnitTimeLeft;
