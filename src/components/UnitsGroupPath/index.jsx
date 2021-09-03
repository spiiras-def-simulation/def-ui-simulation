import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import { Polyline } from 'react-leaflet';

import { GET_MISSION_WITH_PATH } from './requests';

const UnitsGroupPath = ({ id }) => {
  const { data } = useQuery(GET_MISSION_WITH_PATH, { variables: { id } });

  const { mission = null } = data || {};

  const path = useMemo(() => {
    return mission && mission.path && mission.path.map(point => [point.x, point.y]);
  }, [mission]);

  return path && <Polyline positions={path} weight={1} color="blue" />;
};

UnitsGroupPath.propTypes = {
  id: PropTypes.string.isRequired
};

export default UnitsGroupPath;
