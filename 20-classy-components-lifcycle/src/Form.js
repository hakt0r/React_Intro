
import React from 'react';
import { Button, Grid, LinearProgress, Paper, TextField, withStyles } from '@material-ui/core';
import { styles } from './styles';

class Form extends React.Component {

  state = {
    email:'adsdas7d6as57@asdasdasa654.de',
    name:'32423423',
    age:19,
    bio:'',
    password:'asdasas6d76a5sasA!',
    confirm:'asdasas6d76a5sasA!',
    errors:{},
    inProgress: false
  }

  change = ({target}) => {
    const { name, value } = target;
    this.validate( name, value );
  }

  validate ( name, value ) {
    const s = { [name]:value, errors: this.state.errors };

    switch ( name ) {

      case "age":
        if ( Number(value) > 17 ){
          delete s.errors.age;
        } else {
          s.errors.age = 'You need to be at least 18!!!111elfEleven';
        }
        break;

      case "email":
        if ( value.match(/[^@]+@[^.]+\.[a-z]+/) ){
          delete s.errors.email;
        } else {
          s.errors.email = "This is not a valid email address!!!";
        }
        break;

      case "name":
        if ( 3 < s.name.length && s.name.length < 32 ){
          delete s.errors.name;
        } else {
          s.errors.name = "Name shoud be 4 to 31 characters!!!!111elf"
        }
        break;

      case "bio":
        if ( s.bio.length < 512 ){
          delete s.errors.bio;
        } else {
          s.errors.bio = "This bio is too long!!!!111elf"
        }
        break;

      case "password":
        delete s.errors.password;

        const errors = [];

        if ( value.length < 12 )
          errors.push("Password should be at least 11 chars long!");
        
        if ( ! value.match(/[a-z]/) )
          errors.push("Needs a lowercase letter!");

        if ( ! value.match(/[A-Z]/) )
          errors.push("Needs a uppercase letter!");

        if ( ! value.match(/[0-9]/) )
          errors.push("Needs a Number!");

        if ( ! value.match(/[-!_ @#$%^&*,.]/) )
          errors.push("Needs a special character!");

        if ( errors.length > 0 ){
          s.errors.password = errors;
        }
        break;

      case "confirm":
        if ( value === this.state.password ){
          delete s.errors.confirm;
        } else {
          s.errors.confirm = "The passwords must match!!!!111elf"
        }
        break;

      default: break;
    }

    // do we have elements in s.errors? v
    if ( Object.keys(s.errors).length > 0 ) this.hasErrors = true;
    // this.hasErrors = Object.keys(s.errors).length > 0;

    this.setState(s);
  }

  submit = async () => {
    ['email','name','password','confirm','age'].forEach(
      key => this.validate( key, this.state[key] )
      //                   name, value ^^^
    );
    
    console.log(this.state);

    if( this.hasErrors ) return;

    this.setState({ ...this.state, inProgress: true });

    const { email, password, name } = this.state;

    const response = await fetch('/api/auth/register',{
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({ email, password, name })
    });

    const result = await response.json();

    this.setState({ ...this.state, inProgress: false });
  }

  render(){
    const { classes } = this.props;
    const { name, email, age, bio, password, confirm, errors } = this.state;
    return <Paper className={classes.root}>
      <TextField
        onChange={this.change}
        value={email}
        fullWidth
        name="email"
        placeholder="email"
        error={ errors.email !== undefined }
        helperText={ errors.email }
      />
      <TextField
        onChange={this.change}
        value={name}
        fullWidth
        name="name"
        placeholder="Name"
        error={ errors.name !== undefined }
        helperText={ errors.name }
      />
      <TextField
        onChange={this.change}
        value={age}
        fullWidth
        type="number"
        name="age"
        error={ errors.age !== undefined }
        helperText={ errors.age }
        placeholder="Age"
      />
      <TextField
        onChange={this.change}
        value={bio}
        fullWidth
        multiline
        name="bio"
        placeholder="Biography"
        error={ errors.bio !== undefined }
        helperText={ errors.bio }
      />
      <TextField
        onChange={this.change}
        value={password}
        fullWidth
        type="password"
        name="password"
        placeholder="Password"
        error={ errors.password !== undefined }
        helperText={
          errors.password
          ? errors.password.join('\n')
          : null
        }
      />
      <TextField
        onChange={this.change}
        value={confirm}
        fullWidth
        type="password"
        name="confirm"
        placeholder="Confirm Password"
        error={ errors.confirm !== undefined }
        helperText={ errors.confirm }
      />
      <div>
        { this.state.inProgress
        ? <LinearProgress/>
        : <Button
          variant="outlined"
          color="primary"
          onClick={this.submit}
        >Register</Button> }
      </div>
    </Paper>;
  }
};

export default withStyles(styles)(Form);