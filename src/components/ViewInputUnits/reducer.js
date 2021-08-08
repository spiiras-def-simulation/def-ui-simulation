const initialState = {
  isSetPoint: false,
  values: {
    units: {},
    location: null
  }
};

const events = {
  SWITCH_SET_POINT_STATUS: 'SWITCH_SET_POINT_STATUS',
  SET_FORM_VALUE: 'SET_FORM_VALUE'
};

const reducer = (prevState, { type, ...data }) => {
  switch (type) {
    case events.SWITCH_SET_POINT_STATUS: {
      return { ...prevState, isSetPoint: !prevState.isSetPoint };
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
