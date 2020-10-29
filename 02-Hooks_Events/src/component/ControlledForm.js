
import React from 'react';

/*  
    // Controlled Components //

    State holds 2 things:

        1. State Value
            Begins : Default Value
                -> can be changed using

        2. Set State Function
            Change the value of the state
            Decide wether or not the value actually changed:
                -> If value changed
                    -> Initiate re-render
                       Call render() oder the COmponent function again
                        - For classes render will be called
                        - For Funtion the whole function will be called
                -> If value didn't change: ... NOTHING ...
*/

export default function ControlledForm (){
  console.log('Form was called');

  const [    // destruct array
    name,    // [any]:    holds current value
    setName  // function: change the value
  ] = React.useState("anx");

  function nameChanged ({target}) {
    // if ( target.value.match(/^[a-zA-Z0-9 ]*$/) )
    setName(target.value);
    // 1. name = ^^^^^^^^^^^^^
    // 2. Form() *re-render the Form component
    // this only happens when nameValue REALLY changed
  }

  return <>
    <input type="text" name="name"
        value={name}
        onChange={nameChanged}
    />
  </>;
}