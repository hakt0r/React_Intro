
import React, { useState } from 'react';

export const context = {
  state: { name:'anx' },
  setState: null,
  changeName: (name)=> context.setState({
    ...context.state,
    name: name
  })
}

export default function Context ({children}) {
  const [ state, setState ] = useState(context.state);
  context.state    = state;
  context.setState = setState;
  if ( children && ! children.map )
    return React.cloneElement(children,{state});
  return children.map(c => React.cloneElement(c,{state}));
}
