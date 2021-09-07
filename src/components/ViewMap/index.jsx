import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Map as LeafletMap, LayersControl, TileLayer, Rectangle } from 'react-leaflet';

import HeightMapLayer from '../HeightMapLayer';

import Context from './context';
import { getAreaBounds, getProjection } from './utils';

import './index.css';

const ViewMap = ({ onClick, children }) => {
  const zoom = 10;
  const center = useMemo(() => [41.70822143554687, 44.09202367722234], []);
  const bounds = useMemo(() => getAreaBounds(center, 50000), [center]);
  const projection = useMemo(() => getProjection(center, 1), [center]);
  return (
    <Context.Provider value={{ projection }}>
      <LeafletMap
        id="root-map"
        center={center}
        zoom={zoom}
        zoomControl={false}
        maxZoom={24}
        maxNativeZoom={24}
        bounds={bounds}
        maxBounds={bounds}
        maxBoundsViscosity={1.0}
        onClick={onClick}
      >
        <LayersControl position="bottomright">
          <LayersControl.BaseLayer checked name="Обычное представление">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Представление карты высот">
            <HeightMapLayer />
          </LayersControl.BaseLayer>
        </LayersControl>
        {children}
        <Rectangle bounds={bounds} fill={false} />
      </LeafletMap>
    </Context.Provider>
  );
};

ViewMap.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
};

ViewMap.defaultProps = {
  onClick: () => {},
  children: null
};

export default ViewMap;
