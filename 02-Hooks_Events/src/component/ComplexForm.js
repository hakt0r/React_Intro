
import React from 'react';

export default function ComplexForm (){

  const [
      state,
      setState
  ] = React.useState({
      name: 'anx',
      age: 36
  });

  function changed ({target:{name,value}}) {
    const newState = { ...state, [name]: value }
    setState(newState);
  }

  console.log(state);

  return <>
    <input type="text" name="name"
        value={state.name}
        onChange={changed}
    />
    <input type="number" name="age"
        value={state.age}
        onChange={changed}
    />  </>;
}