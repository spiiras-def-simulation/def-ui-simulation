import events from './events';

const handleSetLocationParams = (prevState, data) => {
  return { ...prevState, params: { ...data } };
};

const handleSetDrawingMode = (prevState, data) => {
  return { ...prevState, drawingMode: data };
};

const handleCreateAreaObject = (prevState, { object }) => {
  const { drawingMode } = prevState;
  const areas = { ...prevState.areas };
  areas[drawingMode] = (areas[drawingMode] || []).concat(object);

  return { ...prevState, areas };
};

const handleUpdateAreaObjects = (prevState, { objects }) => {
  const { drawingMode } = prevState;
  const areas = { ...prevState.areas };
  areas[drawingMode] = prevState.areas[drawingMode].map(areaObject =>
    objects.find(object => areaObject.id === object.id || areaObject)
  );

  return { ...prevState, areas };
};

const handleRemoveAreaObjects = (prevState, { objects }) => {
  const { drawingMode } = prevState;
  const areas = { ...prevState.areas };
  areas[drawingMode] = prevState.areas[drawingMode].filter(
    areaObject => !objects.includes(areaObject.id)
  );

  return { ...prevState, areas };
};

const handlers = new Map([
  [events.SET_LOCATION_PARAMS, handleSetLocationParams],
  [events.SET_DRAWING_MODE, handleSetDrawingMode],
  [events.CREATE_AREA_OBJECT, handleCreateAreaObject],
  [events.UPDATE_AREA_OBJECTS, handleUpdateAreaObjects],
  [events.REMOVE_AREA_OBJECTS, handleRemoveAreaObjects]
]);

function reducer(state, { type, data }) {
  const handleAction = handlers.get(type);

  if (typeof handleAction === 'function') {
    return handleAction(state, data);
  }

  return state;
}

export default reducer;
