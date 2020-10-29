
import React, { useRef } from 'react';
import { Card } from 'react-bootstrap';

let timer = null;

function Ref() {
    const divRef = useRef(null);

    clearInterval(timer);

    timer = setInterval(
        t => divRef.current.innerText = Date.now() / 1000
    , 1000 );

    return <Card ref={divRef}>I'm a div!</Card>;
}

export default Ref;
