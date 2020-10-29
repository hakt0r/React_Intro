
import React          from 'react';
import Form           from './component/Form';
import ControlledForm from './component/ControlledForm';
import PersistentForm from './component/PersistentForm';
import ComplexForm    from './component/ComplexForm';

function App() {
  return <>
    <h2>Uncontrolled Form</h2>
    <Form/>
    <h2>Controlled Form</h2>
    <ControlledForm/>
    <h2>Persistent Form</h2>
    <PersistentForm/>
    <h2>Complex Form</h2>
    <ComplexForm/>
  </>;
}

export default App;
