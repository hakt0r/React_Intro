
import React      from 'react';
import Classy     from './component/Classy';
import Functional from './component/Functional';
import Proppy     from './component/Proppy';
import Ref        from './component/Ref';
import State      from './component/State';
import Lists      from './component/Lists';
import { Card } from 'react-bootstrap';

function App() {
  return <>
    <Card>
      <Card.Body>
        <Classy/>
        <Functional/>
        <State/>
        <Ref/>
        <Proppy value={1}/>
        <Proppy value={2}/>
        <Proppy value={3}/>
        <Lists listData={['anx','cia']}/>
        </Card.Body>
    </Card>
  </>;
}

export default App;
