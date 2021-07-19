import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useQuery, useSubscription } from '@apollo/client';

import MarkerPosition from '../MarkerPosition';

import MapContext from '../ViewMap/context';

import { GET_TARGET_POSITION, SUBSCRIBE_TARGET_OBJECT_POSITION } from './requests';

const GroundTargetObject = ({ id }) => {
  const { projection } = useContext(MapContext);
  const { data: initialData } = useQuery(GET_TARGET_POSITION, { variables: { id } });
  const { data } = useSubscription(SUBSCRIBE_TARGET_OBJECT_POSITION, { variables: { id } });

  if (!initialData) return null;

  const { object = null } = data || initialData || {};
  const coordinates = object && object.coordinates ? projection.project(object.coordinates) : null;
  return (
    coordinates && (
      <MarkerPosition id={id} position={coordinates} options={{ color: 'darkmagenta' }} />
    )
  );
};

GroundTargetObject.propTypes = {
  id: PropTypes.string.isRequired
};

export default GroundTargetObject;
