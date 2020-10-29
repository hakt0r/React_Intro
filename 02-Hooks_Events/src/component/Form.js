
import React from 'react';

export default function Form (){
  console.log('Form was called');

  // establish a connection between
  // js and html
  const nameFieldRef = React.useRef(null);
  //    ^ == { current: HTMLElement }

  function submit () {
    // get html element from ref object
    const element = nameFieldRef.current;
    // output value of the input field
    console.log( element.value );
    element.style.border = "solid 1px red";
    element.value = "tadaaaa";
  }

  return <>
    <input
      type="text" name="name"
      ref={nameFieldRef} />
    {/* ^^^^^^^^^^^^^^^^ connect input field to ref*/}
    <button onClick={submit}>Send</button>
  </>;
}