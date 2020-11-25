
import React, { useEffect, useState } from "react";
import { Typography, Paper } from "@material-ui/core";

export function CountdownFunc(){
  const [ seconds, set ] = useState(10);
  useEffect(
    ()=> {
      const timer = setInterval( ()=> set( s => s - 1 ), 1000 );
      return ()=> clearInterval(timer); // equivalent of componentWillUnmount
    },
    [] // empty dependency array == componentDidMount
  );
  return <Paper><Typography variant="h2">{seconds}</Typography></Paper>;
}

export class CountdownClass extends React.Component {
  constructor(props){ // optional but very common
    super(props);    // we _must_ call super with props
    this.state = { seconds: 10 }; // this.state, setState is builtin
  }
  componentDidMount(){ // optional
    // like useEffect( ..., []) this function will only
    // run once, when the component is ready
    this.timer = setInterval( ()=> this.setState({seconds:this.state.seconds-1}), 1000 );
  }
  componentWillUnmount(){
    clearInterval(this.timer);
  }
  render(){
    return <Paper><Typography variant="h2">{this.state.seconds}</Typography></Paper>;
  }
}

export class CountdownClassSimplified extends React.Component {
  state = { seconds: 10 }; // this.state, setState is builtin

  componentDidMount(){ // optional
    // like useEffect( ..., []) this function will only
    // run once, when the component is ready
    this.timer = setInterval( ()=> this.setState({seconds:this.state.seconds-1}), 1000 );
  }
  
  componentWillUnmount(){
    clearInterval(this.timer);
  }

  render(){
    return <Paper><Typography variant="h2">{this.state.seconds}</Typography></Paper>;
  }
}