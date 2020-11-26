
import { store } from '../store';
const { dispatch } = store;

export const changeInput = (value) => {
  dispatch({
    type: "post:changeInput", value
  });
}

export const sendMessage = ()=> {
  dispatch({
    type: "post:sendMessage"
  });
}