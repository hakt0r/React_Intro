
import { Button, Paper, TextField } from '@material-ui/core';
import React from 'react'
import { connect } from 'react-redux';
import { addPost } from './actions';

const AddPost = ({message,dispatch}) => { 
  return <Paper>
    <TextField multiline
      value={ message }
      onChange={ e => dispatch({ type:"addPost|change", message:e.target.value}) }
    />
    <Button
      onClick={ e => addPost(message) }
    >Add Post</Button>
  </Paper>;
};

const withAuth = connect(
  state => ({ ...state.addPost })
);

export default withAuth(AddPost);

