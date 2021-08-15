import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import MarkerPosition from '../MarkerPosition';

const UnitStrikeObject = ({ id, position, subToUpdate }) => {
  useEffect(() => subToUpdate(), [subToUpdate]);

  return (
    position && (
      <MarkerPosition number={id} position={position} options={{ color: 'mediumpurple' }} />
    )
  );
};

UnitStrikeObject.propTypes = {
  id: PropTypes.string.isRequired,
  position: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  }),
  subToUpdate: PropTypes.func
};

UnitStrikeObject.defaultProps = {
  position: null,
  subToUpdate: () => {}
};

export default UnitStrikeObject;
