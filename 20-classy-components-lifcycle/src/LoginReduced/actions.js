
import { store } from './redux';

const { dispatch } = store;

export const login = async (email,password) => {
  dispatch({type:'login|change', key:"inProgress", value:true });
  
  const response = await fetch('/api/auth/login',{
    method: "POST",
    headers: { "Content-Type": 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const result = await response.json();

  dispatch({type:'login|success', token: result.tokens.access.token });
}

export const updatePosts = async () => {
  const response = await fetch('/api/post/', {
    headers: { "Authorization": store.getState().token }
  });
  const posts = await response.json();
  dispatch({type:'posts|update',posts});
};

export const addPost = async (message) => {
  const response = await fetch('/api/post/', {
    method:"POST",
    headers: {
      "Content-Type": 'application/json',
      "Authorization": store.getState().token
    },
    body: JSON.stringify({message})
  });
  dispatch({ type:"addPost|change", message:'' });
  updatePosts();
};

export const deletePost = async (id) => {
  await fetch( `/api/post/${id}`, {
    method: "DELETE",
    headers: { Authorization: store.getState().token }
  });
  updatePosts();
};