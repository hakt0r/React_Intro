
import { Avatar, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'

export default function Posts() {
    const [ data,    setData    ] = useState(null);
    const [ loading, setLoading ] = useState(false);

    useEffect( ()=>{
      setLoading(true);
      fetch("/posts/")
      .then( response => response.json() )
      .then( data => {
        setData(data);
        setLoading(false);
      })
    }, [] );

    if ( ! data || loading ) return 'loading';

    return (
    <div>{ data.map( (post)=> {
      const { title, message, image, createdAt } = post;
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
