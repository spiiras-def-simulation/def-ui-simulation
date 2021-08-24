import events from './events';

const handleSetMissionParams = (prevState, data) => {
  return { ...prevState, params: { ...data } };
};

const handleSetMissionTargets = (prevState, data) => {
  return { ...prevState, targets: data };
};

const handleChangeScoutGroupRole = (prevState, data) => {
  const nextState = { ...prevState };
  nextState.units.scoutRole = data;
  return nextState;
};

const handleChangeStrikeGroupRole = (prevState, data) => {
  const nextState = { ...prevState };
  nextState.units.strikeRole = data;
  return nextState;
};

const handleSetUnitGroup = (prevState, data) => {
  const nextState = { ...prevState };
  nextState.units.uavs = data;
  return nextState;
};

const handleSetMapPoint = (prevState, data) => {
  const { mapPointMode } = prevState;
  const locations = { ...prevState.locations };
  locations[mapPointMode] = data;
  return { ...prevState, locations };
};

const handleSetDrawingMode = (prevState, data) => {
  return { ...prevState, drawingMode: data };
};

const handleSetMapPointMode = (prevState, data) => {
  return { ...prevState, mapPointMode: data };
};

const handleCreateAreaObject = (prevState, { object }) => {
  const { drawingMode } = prevState;
  const areas = { ...prevState.areas };
  areas[drawingMode] = object;

  return { ...prevState, areas };
};

const handleUpdateAreaObjects = (prevState, { objects }) => {
  const { drawingMode } = prevState;
  const areas = { ...prevState.areas };
  const [addedObject] = objects;
  areas[drawingMode] = addedObject;

  return { ...prevState, areas };
};

const handleRemoveAreaObjects = prevState => {
  const { drawingMode } = prevState;
  const areas = { ...prevState.areas };
  areas[drawingMode] = null;

  return { ...prevState, areas };
};

const handlers = new Map([
  [events.SET_MISSION_PARAMS, handleSetMissionParams],
  [events.SET_MISSION_TARGETS, handleSetMissionTargets],
  [events.CHANGE_SCOUT_GROUP_ROLE, handleChangeScoutGroupRole],
  [events.CHANGE_STRIKE_GROUP_ROLE, handleChangeStrikeGroupRole],
  [events.SET_UNIT_GROUP, handleSetUnitGroup],
  [events.SET_MAP_POINT, handleSetMapPoint],
  [events.SET_DRAWING_MODE, handleSetDrawingMode],
  [events.SET_MAP_POINT_MODE, handleSetMapPointMode],
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
