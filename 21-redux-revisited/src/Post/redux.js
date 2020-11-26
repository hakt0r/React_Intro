
const defaultState = {
  message: '',
  posts:   []
};

const postReducer = ( state=defaultState, action ) => {
  switch( action.type ){
    case "post:changeInput":
      return { ...state, message: action.value };
    case "post:sendMessage":
      const newState = { ...state };
      const newPosts = [ ...state.posts ];
      newState.posts = newPosts;
      newPosts.push(state.message);
      newState.message = '';
      return newState;
    default:
      return state;
  }
}

export { postReducer };