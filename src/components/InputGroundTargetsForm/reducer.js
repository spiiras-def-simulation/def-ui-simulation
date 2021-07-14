const initialState = {
  mapPointStatus: null,
  values: {
    number: null,
    location: {},
    target: {}
  }
};

const events = {
  SET_MAP_POINT_STATUS: 'SET_MAP_POINT_STATUS',
  SET_FORM_VALUE: 'SET_FORM_VALUE'
};

const reducer = (prevState, { type, ...data }) => {
  switch (type) {
    case events.SET_MAP_POINT_STATUS: {
      return { ...prevState, mapPointStatus: data.value };
    }
    case events.SET_FORM_VALUE: {
      const values = { ...prevState.values };
      values[data.name] = data.value;
      return { ...prevState, values };
    }
    default: {
      return prevState;
    }
  }
};

export { initialState, events, reducer };
