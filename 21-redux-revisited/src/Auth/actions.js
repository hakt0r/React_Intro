
import { store } from '../store';
const { dispatch } = store;

export const login = (email,password) => {
  // fetch...
  // => name, token
  dispatch({
    type:  "auth:login",
    token: "dsf586a5sd86a5s43d54a3s656d5a343as65a34",
    name:  "anx"
  });
}

export const logout = ()=> {
  dispatch({
    type:  "auth:logout",
  });
}