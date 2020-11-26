
const defaultState = { // state.auth
  token: false, // state.auth.token
  name:  ''     // state.auth.name
};

const authReducer = ( state=defaultState, action ) => {
  switch( action.type ){
    case "auth:login":  return { token: action.token, name: action.name };
    case "auth:logout": return { token: false,        name: ''          };
    default:            return state;
  }
}

export { authReducer };