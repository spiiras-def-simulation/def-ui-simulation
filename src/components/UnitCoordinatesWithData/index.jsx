import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';

import UnitCoordinates from '../UnitCoordinates';

import MapContext from '../ViewMap/context';

import { GET_COMBAT_UNIT, SUBSCRIBE_UNIT_POSITION } from './requests';

const getPosition = (coordinates, project) => (coordinates ? project(coordinates) : null);

const UnitCoordinatesWithData = ({ id }) => {
  const { projection } = useContext(MapContext);
  const { subscribeToMore, ...result } = useQuery(GET_COMBAT_UNIT, { variables: { id } });

  if (result.loading || result.error) return 'Позиция неизвестна';

  const { coordinates = null } = (result.data && result.data.unit) || {};
  return (
    <UnitCoordinates
      position={coordinates && getPosition(coordinates, projection.project)}
      subToUpdate={() => {
        subscribeToMore({
          document: SUBSCRIBE_UNIT_POSITION,
          variables: { id },
          updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data) return prev;
            const { unit: updated } = subscriptionData.data;
            const updatedPosition = getPosition(updated.coordinates, projection.project);
            return { unit: { ...prev.unit, coordinates: updatedPosition } };
          }
        });
      }}
    />
  );
};

UnitCoordinatesWithData.propTypes = {
  id: PropTypes.string.isRequired
};

export default UnitCoordinatesWithData;
