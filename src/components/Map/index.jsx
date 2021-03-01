import React from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';

// import LayerRobots from '../LayerRobots';
// import RobotsInformation from '../RobotsInformation';

// import createMapConfiguration from './projection';

import './index.css';

const Map = ({ config: { mapCenter } }) => {
  // const mapBounds = useMemo(
  //   () =>
  //     height && width
  //       ? [
  //           [0, 0],
  //           [height, width]
  //         ]
  //       : null,
  //   [width, height]
  // );

  return (
    <LeafletMap
      id="root-map"
      center={mapCenter}
      zoom={0}
      crs={L.CRS.Simple}
      zoomControl={false}
      useFlyTo
    >
      <TileLayer url="http://localhost:5310/{z}/{y}/{x}.jpg" />
      {/* <ImageOverlay url={`http://${window.location.host}/mapImage`} bounds={mapBounds} /> */}
      {/* <RobotsInformation position="topleft" /> */}
      {/* <LayerRobots /> */}
    </LeafletMap>
  );
};

Map.propTypes = {
  config: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    mapCenter: PropTypes.arrayOf(PropTypes.number)
  }).isRequired
};

export default Map;
