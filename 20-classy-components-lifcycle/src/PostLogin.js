
import React from 'react';
import { Button, LinearProgress, Paper, TextField, withStyles } from '@material-ui/core';
import { styles } from './styles';
import Posts      from './Posts';
import AddPost    from './AddPost';

class Login extends React.Component {

  state = {
    email:'adsdas7d6as57@asdasdasa654.de',
    password:'asdasas6d76a5sasA!',
    token:false,
    inProgress: false
  }

  change = ({target}) => {
    const { name, value } = target;
    this.setState({[name]:value});
  }

  submit = async () => {
    this.setState({ ...this.state, inProgress: true });

    const { email, password } = this.state;

    const response = await fetch('/api/auth/login',{
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const result = await response.json();

    this.setState({
      ...this.state,
      inProgress: false,
      token: result.tokens.access.token
    });
  }

  setUpdateFunction = (update) => {
    this.setState({ update });
  }

  render(){
    const { classes } = this.props;
    const { email, password, token } = this.state;
    if ( token ) return <>
      <AddPost token={token} update={this.state.update}/>
      <Posts   token={token} setUpdateFunction={this.setUpdateFunction}/>
    </>;
    return <Paper className={classes.root}>
      <TextField
        onChange={this.change}
        value={email}
        fullWidth
        name="email"
        placeholder="email"
      />
      <TextField
        onChange={this.change}
        value={password}
        fullWidth
        type="password"
        name="password"
        placeholder="Password"
      />
      <div>
        { this.state.inProgress
        ? <LinearProgress/>
        : <Button
          variant="outlined"
          color="primary"
          onClick={this.submit}
        >Login</Button> }
      </div>
    </Paper>;
  }
};

export default withStyles(styles)(Login);