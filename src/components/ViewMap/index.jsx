import React from 'react';
import PropTypes from 'prop-types';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';

import './index.css';

const ViewMap = ({ children }) => {
  const center = [0, 0];
  const bounds = [
    [59.96377573688943, 30.513410568237305],
    [59.953978877271574, 30.53821563720703]
  ];

  return (
    <LeafletMap
      id="root-map"
      center={center}
      zoom={0}
      zoomControl={false}
      bounds={bounds}
      maxBounds={bounds}
      maxBoundsViscosity={1.0}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {children}
    </LeafletMap>
  );
};

ViewMap.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
};

ViewMap.defaultProps = {
  children: null
};

export default ViewMap;
