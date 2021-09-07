import React, { useContext, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { FeatureGroup, Polyline } from 'react-leaflet';

import MarkerKeyPoint from '../MarkerKeyPoint';
import MarkerPosition from '../MarkerPosition';

import MapContext from '../ViewMap/context';

const GroundTargetObject = ({ object, subToUpdate }) => {
  const { projection } = useContext(MapContext);

  useEffect(() => subToUpdate(), [subToUpdate]);

  const { id, path, coordinates } = object;
  const pathPositions = useMemo(() => {
    return path && path.map(point => projection.project(point)).map(point => [point.x, point.y]);
  }, [path, projection]);
  const positions = useMemo(() => {
    return coordinates && projection.project(coordinates);
  }, [coordinates, projection]);

  return (
    coordinates && (
      <FeatureGroup>
        {pathPositions && <Polyline positions={pathPositions} weight={1} color="black" />}
        {pathPositions && pathPositions[0] && (
          <MarkerKeyPoint
            position={{
              x: pathPositions[0][0],
              y: pathPositions[0][1]
            }}
            options={{ color: 'green' }}
          />
        )}
        {pathPositions && pathPositions[pathPositions.length - 1] && (
          <MarkerKeyPoint
            position={{
              x: pathPositions[pathPositions.length - 1][0],
              y: pathPositions[pathPositions.length - 1][1]
            }}
            options={{ color: 'red' }}
          />
        )}
        <MarkerPosition number={id} position={positions} options={{ color: 'black', size: 12 }} />
      </FeatureGroup>
    )
  );
};

GroundTargetObject.propTypes = {
  object: PropTypes.shape({
    id: PropTypes.string,
    coordinates: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number
    }),
    path: PropTypes.arrayOf(
      PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number
      })
    )
  }).isRequired,
  subToUpdate: PropTypes.func
};

GroundTargetObject.defaultProps = {
  subToUpdate: () => {}
};

export default GroundTargetObject;
