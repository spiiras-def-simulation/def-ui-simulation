import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useQuery, useSubscription } from '@apollo/client';
import { Polyline } from 'react-leaflet';

import MapContext from '../ViewMap/context';

import { GET_TARGET_PATH, SUBSCRIBE_TARGET_PATH } from './requests';

const GroundTargetPath = ({ id }) => {
  const { projection } = useContext(MapContext);
  const { data: initialData } = useQuery(GET_TARGET_PATH, { variables: { id } });
  const { data } = useSubscription(SUBSCRIBE_TARGET_PATH, { variables: { id } });

  const path = useMemo(() => {
    const { object = null } = data || initialData || {};
    return object && object.path
      ? object.path.map(point => {
          const coordinates = projection.project(point);
          return [coordinates.x, coordinates.y];
        })
      : null;
  }, [data, initialData, projection]);

  return path && <Polyline positions={path} />;
};

GroundTargetPath.propTypes = {
  id: PropTypes.string.isRequired
};

export default GroundTargetPath;
