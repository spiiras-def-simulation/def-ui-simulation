import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useQuery, useSubscription } from '@apollo/client';

import UnitScoutObject from '../UnitScoutObject';

import MapContext from '../ViewMap/context';

import { GET_UNIT_OBJECT, SUBSCRIBE_UNIT_POSITION } from './requests';

const getPosition = (coordinates, project) => (coordinates ? project(coordinates) : null);

const UnitScoutObjectWithData = ({ id }) => {
  const { projection } = useContext(MapContext);
  // const { subscribeToMore, ...result } = useQuery(GET_UNIT_OBJECT, { variables: { id } });
  const { ...result } = useQuery(GET_UNIT_OBJECT, { variables: { id } });
  const { data: newData } = useSubscription(SUBSCRIBE_UNIT_POSITION, { variables: { id } });

  if (result.loading || result.error) return null;

  const { object } = result.data;
  const { coordinates = null } = (newData && newData.object) || {};
  return (
    <UnitScoutObject
      object={{
        ...object,
        detectionRadius: 500,
        tvsSize: 540,
        coordinates: coordinates && getPosition(coordinates, projection.project)
      }}
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

UnitScoutObjectWithData.propTypes = {
  id: PropTypes.string.isRequired
};

export default UnitScoutObjectWithData;
