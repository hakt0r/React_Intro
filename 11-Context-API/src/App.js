
import React, { useState } from 'react';
import Example             from './Example';
import Context             from './Context';
import AnxExample          from './AnxExample';

export const StateContext = React.createContext();

const defaultValue = {
  name: 'anx',
  changeName: function (name){
    this.setState({...this,name})
  }
};

function App() {
  const [ state, setState ] = useState(defaultValue);
  const composedContext = { ...state, setState };
  return ( <>
  <StateContext.Provider value={composedContext}>
    <Example/>
  </StateContext.Provider>
  <Context>
    <AnxExample/>
  </Context>
  </>);
}

export default App;
