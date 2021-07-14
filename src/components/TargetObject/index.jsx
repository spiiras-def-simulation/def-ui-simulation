import React from 'react';
import PropTypes from 'prop-types';
import { useSubscription } from '@apollo/client';
import L from 'leaflet';
import { Marker } from 'react-leaflet';

import { SUBSCRIBE_TARGET_OBJECT_POSITION } from './requests';

const TargetObject = ({ id }) => {
  const { data } = useSubscription(SUBSCRIBE_TARGET_OBJECT_POSITION, {
    variables: { id }
  });

  if (!data) return null;

  const { target } = data;
  return (
    target.coordinates && (
      <Marker
        position={[target.coordinates.y, target.coordinates.x]}
        icon={L.divIcon({
          className: 'target-object-position',
          html: `<div class="target-object-position-marker"/>`
        })}
      />
    )
  );
};

TargetObject.propTypes = {
  id: PropTypes.string.isRequired
};

export default TargetObject;
