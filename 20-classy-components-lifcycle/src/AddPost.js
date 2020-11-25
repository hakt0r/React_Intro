
import { Button, Paper, TextField } from '@material-ui/core';
import React from 'react'

export default class AddPost extends React.Component {
  state = {
    message:'',
    posts:[]
  }
  async submit(){
    const response = await fetch('/api/post/',{
      method:"POST",
      headers: {
        "Content-Type": 'application/json',
        "Authorization": this.props.token
      },
      body: JSON.stringify({message:this.state.message})
    });
    this.setState({message:''});
    if ( this.props.update ) this.props.update();
  }
  render(){
    return <Paper>
      <TextField multiline
        value={ this.state.message }
        onChange={ e => this.setState({message:e.target.value}) }
      />
      <Button
        onClick={this.submit.bind(this)}
      >Add Post</Button>
    </Paper>;
  }
} 