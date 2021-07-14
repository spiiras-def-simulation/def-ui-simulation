import React from 'react';
import PropTypes from 'prop-types';

import EditLayerControl from '../EditLayerControl';
import AreaObjects from '../AreaObjects';

const drawOptions = {
  draw: {
    polyline: false,
    polygon: {
      color: 'blue'
    },
    rectangle: false,
    circle: false,
    marker: false,
    circlemarker: false
  }
};

const AreaDrawing = ({ area, onSaveArea }) => {
  const createAreaObject = object => {
    onSaveArea([...area, object]);
  };

  const updateAreaObjects = objects => {
    onSaveArea(
      area.map(areaObject => {
        return objects.find(object => object.id === areaObject.id) || areaObject;
      })
    );
  };

  const removeAreaObjects = objects => {
    onSaveArea(area.filter(areaObject => !objects.includes(areaObject.id)));
  };

  return (
    <EditLayerControl
      options={drawOptions}
      createObject={createAreaObject}
      updateObjects={updateAreaObjects}
      removeObjects={removeAreaObjects}
    >
      <AreaObjects objects={area} color="blue" />
    </EditLayerControl>
  );
};

AreaDrawing.propTypes = {
  onSaveArea: PropTypes.func,
  area: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      data: PropTypes.shape({})
    })
  )
};

AreaDrawing.defaultProps = {
  onSaveArea: () => {},
  area: []
};

export default AreaDrawing;
