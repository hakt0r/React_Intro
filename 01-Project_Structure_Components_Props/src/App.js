
// in every component file import react
import React from 'react';

// import components from other files
import Hamster from './component/Hamster';

import {
  DoubleHamster as DoublePower,
  RandomHamster
} from './component/Hamster';

import ClassyHamster from "./component/ClassyHamster";

// import css file to make it available
import './App.css';

function App() {
  return <>
    <ClassyHamster/>
    <Hamster cutenessFactor={2}/>
    <RandomHamster/>
    <DoublePower/>
    <div className="centered">
      <b>JSX</b>
      <i>rocks!</i>
    </div>
  </>;
}

export default App;