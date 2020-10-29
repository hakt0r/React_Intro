
import React from 'react';

const storedValue =
    localStorage.getItem('myValue')
    || 'anx';

export default function PersistentForm (){
  const [ name, setName ] = React.useState(storedValue);

  function nameChanged ({target:{value}}) {
    setName(value);
    localStorage.setItem('myValue',value);
  }

  return <input value={name} onChange={nameChanged} />;
}