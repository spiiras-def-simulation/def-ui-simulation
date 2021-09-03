import L from 'leaflet';

function getAreaBounds(center, distance) {
  return L.latLng(center).toBounds(distance);
}

function getProjection(center, scale) {
  const projCenter = L.CRS.EPSG3857.project(L.latLng(center[0], center[1]));

  return {
    project: point => {
      const unprojPoint = L.CRS.EPSG3857.unproject(
        L.point(projCenter.x + point.x * scale, projCenter.y + point.y * scale)
      );

      return L.point(unprojPoint.lat, unprojPoint.lng);
    },
    unproject: point => {
      const projPoint = L.CRS.EPSG3857.project(L.latLng(point.x, point.y));
      return L.point((projPoint.x - projCenter.x) / scale, (projPoint.y - projCenter.y) / scale);
    }
  };
}

export { getAreaBounds, getProjection }; // eslint-disable-line
