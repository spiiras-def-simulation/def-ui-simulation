import L from 'leaflet';

function getAreaBounds(center, size) {
  return L.latLng(center).toBounds(size);
}

function getProjection(center) {
  const projCenter = L.CRS.EPSG3857.project(L.latLng(center[0], center[1]));

  return {
    project: point => {
      const unprojPoint = L.CRS.EPSG3857.unproject(
        L.point(projCenter.x + point.x * 32, projCenter.y + point.y * 32)
      );

      return L.point(unprojPoint.lat, unprojPoint.lng);
    },
    unproject: point => {
      const projPoint = L.CRS.EPSG3857.project(L.latLng(point.x, point.y));
      return L.point((projPoint.x - projCenter.x) / 32, (projPoint.y - projCenter.y) / 32);
    }
  };
}

export { getAreaBounds, getProjection }; // eslint-disable-line
