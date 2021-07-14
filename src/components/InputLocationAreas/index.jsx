import React, { useContext } from 'react';

import EditLayerControl from '../EditLayerControl';
import AreaObjects from '../AreaObjects';

import Context from '../ViewInputLocation/context';
import events from '../ViewInputLocation/events';

import areaColors from './areaColors';

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

const InputLocationAreas = () => {
  const { state, dispatch } = useContext(Context);

  const { areas, drawingMode } = state;

  const onCreateAreaObject = object => {
    dispatch({ type: events.CREATE_AREA_OBJECT, data: { object } });
  };

  const onUpdateAreaObjects = objects => {
    dispatch({ type: events.UPDATE_AREA_OBJECTS, data: { objects } });
  };

  const onRemoveAreaObjects = objects => {
    dispatch({ type: events.REMOVE_AREA_OBJECTS, data: { objects } });
  };

  const drawingArea = areas[drawingMode] || [];
  const renderedAreas = Object.entries(areas).filter(([type]) => type !== drawingMode);

  return (
    <>
      {drawingMode && (
        <EditLayerControl
          options={drawOptions}
          createObject={onCreateAreaObject}
          updateObjects={onUpdateAreaObjects}
          removeObjects={onRemoveAreaObjects}
        >
          <AreaObjects objects={drawingArea} color="blue" />
        </EditLayerControl>
      )}
      {renderedAreas.map(([type, objects]) => (
        <AreaObjects key={type} color={areaColors.get(type)} objects={objects} />
      ))}
    </>
  );
};

export default InputLocationAreas;
