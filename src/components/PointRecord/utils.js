const fixCoordinateSize = (coordinate, size = 8) =>
  Math.floor(coordinate * 10 ** size) / 10 ** size;

const printPoint = ({ x, y }, size) => {
  const fixLat = fixCoordinateSize(x, size);
  const fixLng = fixCoordinateSize(y, size);
  return `${fixLat > 0 ? 'N' : 'S'}${fixLat}, ${fixLng > 0 ? 'E' : 'W'}${fixLng}`;
};

export { fixCoordinateSize, printPoint };
