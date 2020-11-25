
import { useState } from 'react';
import { Button } from '@material-ui/core';
import {
  CountdownFunc,
  CountdownClass
} from './Countdown';

export default
function CountdownExample() {
  const [show,setShow] = useState(true);
  return <>
    <Button
      variant="contained"
      onClick={ e => setShow(!show) }
      >Toggle</Button>
    { show ? <CountdownFunc/> : null }
    { show ? <CountdownClass/> : null }
  </>;
}