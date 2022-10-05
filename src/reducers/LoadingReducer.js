const INITIAL_STATE = {
  loadingIndicate: 'false',
  userName: '',
  loginUserName: '',
  fullName: '',
  email: '',
  password: '',
  loginPassword: '',
  confirmPassword: '',
  pic: 'default',
  userDAta: {},
};

function loadingReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_UER_NAME':
      return {...state, userName: action.payload};
    case 'SET_LOGIN_UER_NAME':
      return {...state, loginUserName: action.payload};
    case 'SET_FULL_NAME':
      return {...state, fullName: action.payload};
    case 'SET_EMAIL':
      return {...state, email: action.payload};
    case 'SET_PASSWORD':
      return {...state, password: action.payload};
    case 'SET_LOGIN_PASSWORD':
      return {...state, loginPassword: action.payload};
    case 'SET_CONFIRM_PASSWORD':
      return {...state, confirmPassword: action.payload};
    case 'SET_PIC':
      return {...state, pic: action.payload};
    case 'SET_USER_DATA':
      return {...state, userDAta: action.payload};
    case 'RESET':
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default loadingReducer;
