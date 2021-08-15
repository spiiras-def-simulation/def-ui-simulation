import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Map as LeafletMap, LayersControl, TileLayer, Rectangle } from 'react-leaflet';

import HeightMapLayer from '../HeightMapLayer';

import Context from './context';
import { getAreaBounds, getProjection } from './utils';

import './index.css';

const ViewMap = ({ onClick, children }) => {
  const zoom = 10;
  const center = useMemo(() => [60.42205810546875, 57.18352973277818], []);
  const bounds = useMemo(() => getAreaBounds(center, 2048), [center]);
  const projection = useMemo(() => getProjection(center), [center]);

  return (
    <Context.Provider value={{ projection }}>
      <LeafletMap
        id="root-map"
        center={center}
        zoom={zoom}
        zoomControl={false}
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
