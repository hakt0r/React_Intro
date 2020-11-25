
import { createStore } from 'redux';
import { connect }     from 'react-redux';

const defaultState = {
  token:        localStorage.getItem('demo-auth-token') || false,
  login: {
    email:      'adsdas7d6as57@asdasdasa654.de',
    password:   'asdasas6d76a5sasA!',
    inProgress: false
  },
  addPost:      { message:'' },
  posts:        [],
}

const reducer = ( state = defaultState, action ) => {
  switch (action.type) {
    case "login|change": return {...state,login:{...state.login,
      [action.key]:action.value
    }};
    case "login|success": return {...state,
      token: action.token,
      login:{
        ...state.login,
        inProgress: false
      }
    };
    case "addPost|change":
      return {...state, addPost:{ message: action.message } };
    case "posts|update":
      return {...state, posts: action.posts };
    default: return state;
  }
}

export const withAuth = connect(
  state => state,
  dispatch => ({
    changeField: (key,value) => dispatch({ type:'login|change', key, value })
  })
);

export const store = createStore(reducer);

store.subscribe(
  ()=> {
    const state = store.getState();
    if ( localStorage['demo-auth-token'] === state.token ) return;
    localStorage.setItem('demo-auth-token',state.token);
  }
);