const INITIAL_STATE = {
  loadingIndicate: 'false',
};

function loadingReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'RESET':
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default loadingReducer;
