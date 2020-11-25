
import React        from 'react';
import { styles }   from '../styles';
import Posts        from './Posts';
import AddPost      from './AddPost';
import { login }    from './actions';
import { withAuth } from './redux';

import {
  Button, LinearProgress, Paper, TextField, withStyles
} from '@material-ui/core';

class LoginReduced extends React.Component {

  change = ({target}) => {
    const { name, value } = target;
    this.props.changeField(name,value)
  }

  submit = async () => {
    const { email, password } = this.props.login;
    login(email,password);
  }

  render(){
    const { classes } = this.props;
    const { email, password, inProgress } = this.props.login;
    if ( this.props.token ) return <>
      <AddPost/>
      <Posts/>
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
        { inProgress
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

export default
withAuth(
  withStyles(styles)(
    LoginReduced
  )
);