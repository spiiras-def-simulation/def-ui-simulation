import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useQuery, useSubscription } from '@apollo/client';

import MarkerPosition from '../MarkerPosition';

import MapContext from '../ViewMap/context';

import { GET_TARGET_POSITION, SUBSCRIBE_TARGET_POSITION } from './requests';

const GroundTargetPosition = ({ id, isGlobal }) => {
  const { projection } = useContext(MapContext);
  const { data: initialData } = useQuery(GET_TARGET_POSITION, { variables: { id } });
  const { data } = useSubscription(SUBSCRIBE_TARGET_POSITION, { variables: { id } });

  const { object = null } = data || initialData || {};
  const coordinates = useMemo(() => {
    const position = (object && object.coordinates) || null;
    return isGlobal ? position : position && projection.project(position);
  }, [object, isGlobal, projection]);

  if (!coordinates) return null;

  return <MarkerPosition number={id} position={coordinates} options={{ color: 'black' }} />;
};

GroundTargetPosition.propTypes = {
  id: PropTypes.string.isRequired,
  isGlobal: PropTypes.bool
};

GroundTargetPosition.defaultProps = {
  isGlobal: false
};

export default GroundTargetPosition;
