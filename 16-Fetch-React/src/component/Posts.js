
import React, { useEffect, useState } from 'react'
import AddPost from "./AddPost";

import { Avatar, Grid, Typography } from '@material-ui/core';
import SyncIcon from '@material-ui/icons/Sync';

const getPostsGenerator = (setData,setLoading)=> ()=> {
  setLoading(true);
  fetch("/posts/")
  .then( response => response.json() )
  .then( data => {
    setData(data);
    setLoading(false);
  })
}

export default function Posts() {
  const [ data,    setData    ] = useState(null);
  const [ loading, setLoading ] = useState(false);
  const getPosts = getPostsGenerator(setData,setLoading);
  useEffect( getPosts, [] );

  if ( ! data || loading ) return <SyncIcon/>;

  return (
  <div>
    <AddPost getPosts={getPosts}/>
  { data.map( (post)=> {
    const { title, message, image } = post;
    return (
    <Grid container spacing={5}>
      <Grid item xs={2}>
        <Avatar alt="" src={image}/>
      </Grid>
      <Grid item xs={10}>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {message}
        </Typography>
      </Grid>
    </Grid> );
  })}</div>); 
}
