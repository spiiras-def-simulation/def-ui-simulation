import React from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';

// import createMapConfiguration from './projection';

import './index.css';

const ViewMap = ({ config: { mapCenter }, children }) => {
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
      maxZoom={0}
      crs={L.CRS.Simple}
      zoomControl={false}
      useFlyTo
    >
      <TileLayer url="http://localhost:5310/{z}/{y}/{x}.jpg" />
      {children}
    </LeafletMap>
  );
};

ViewMap.propTypes = {
  config: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    mapCenter: PropTypes.arrayOf(PropTypes.number)
  }).isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
};

ViewMap.defaultProps = {
  children: null
};

export default ViewMap;
