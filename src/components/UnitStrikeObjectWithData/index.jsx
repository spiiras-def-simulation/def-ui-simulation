import React, { useContext } from 'react';
import PropTypes from 'prop-types';
// import { useQuery } from '@apollo/client';
import { useSubscription } from '@apollo/client';

import UnitStrikeObject from '../UnitStrikeObject';

import MapContext from '../ViewMap/context';

// import { GET_UNIT_OBJECT, SUBSCRIBE_UNIT_POSITION } from './requests';
import { SUBSCRIBE_UNIT_POSITION } from './requests';

const getPosition = (coordinates, project) => (coordinates ? project(coordinates) : null);

const UnitStrikeObjectWithData = ({ id }) => {
  const { projection } = useContext(MapContext);
  // const { subscribeToMore, ...result } = useQuery(GET_UNIT_OBJECT, { variables: { id } });
  const { data, loading, error } = useSubscription(SUBSCRIBE_UNIT_POSITION, { variables: { id } });

  if (loading || error) return null;

  const { coordinates = null } = data.object || {};
  return (
    <UnitStrikeObject
      id={id}
      position={coordinates && getPosition(coordinates, projection.project)}
      // subToUpdate={() =>
      //   subscribeToMore({
      //     document: SUBSCRIBE_UNIT_POSITION,
      //     variables: { id },
      //     updateQuery: (prev, { subscriptionData }) => {
      //       if (!subscriptionData.data) return prev;
      //       const { object: updated } = subscriptionData.data;
      //       const updatedPosition = getPosition(updated.coordinates, projection.project);
      //       return { object: { ...prev.object, coordinates: updatedPosition } };
      //     }
      //   })
      // }
    />
  );
};

UnitStrikeObjectWithData.propTypes = {
  id: PropTypes.string.isRequired
};

export default UnitStrikeObjectWithData;
