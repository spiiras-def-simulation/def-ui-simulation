import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FeatureGroup } from 'react-leaflet';

import UnitScoutObjectWithData from '../UnitScoutObjectWithData';
import UnitStrikeObjectWithData from '../UnitStrikeObjectWithData';

const UnitsGroupObjects = ({ objects, subToUpdate }) => {
  useEffect(() => subToUpdate(), [subToUpdate]);
  return (
    objects && (
      <FeatureGroup>
        {objects
          .filter(unit => unit.role && unit.role.name === 'Разведчик')
          .map(({ id }) => (
            <UnitScoutObjectWithData key={id} id={id} />
          ))}
        {objects
          .filter(unit => unit.role && unit.role.name === 'Ударный')
          .map(({ id }) => (
            <UnitStrikeObjectWithData key={id} id={id} />
          ))}
      </FeatureGroup>
    )
  );
};

UnitsGroupObjects.propTypes = {
  objects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      role: PropTypes.shape({
        name: PropTypes.string
      }).isRequired,
      status: PropTypes.string
    })
  ).isRequired,
  subToUpdate: PropTypes.func
};

UnitsGroupObjects.defaultProps = {
  subToUpdate: PropTypes.func
};

export default UnitsGroupObjects;
