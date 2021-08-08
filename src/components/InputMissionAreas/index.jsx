import React, { useContext } from 'react';

import EditLayerControl from '../EditLayerControl';
import AreaObject from '../AreaObject';

import Context from '../ViewInputMission/context';
import events from '../ViewInputMission/events';

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

const InputMissionAreas = () => {
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

  const drawingArea = areas[drawingMode] || null;
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
          {drawingArea && <AreaObject id={drawingArea.id} data={drawingArea.data} color="blue" />}
        </EditLayerControl>
      )}
      {renderedAreas.map(([type, object]) => {
        return (
          <AreaObject key={type} id={object.id} data={object.data} color={areaColors.get(type)} />
        );
      })}
    </>
  );
};

export default InputMissionAreas;
