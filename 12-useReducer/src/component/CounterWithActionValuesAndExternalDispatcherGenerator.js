
import React, { useReducer } from 'react';
import { Button } from 'react-bootstrap';

const reducer = ( value, action ) => {
    //                   ^ { type: "plus1", ... }
    switch ( action.type ){
        case "plus":    return value + action.howMuch;
        case "reset":   return 0;
        default:        return value;
    }
}

function plus ( dispatch, howMuch ){
    return function theEventHandler (e){
        dispatch( { type: "plus", howMuch } );
    }
}

export default function CounterWithActionValuesAndExternalDispatcherGenerator() {
    const [value,dispatch] = useReducer(reducer,0);
    return (
        <div>
           <span>{value}</span>
           <Button onClick={ plus( dispatch, 1   ) }>+1</Button>
           <Button onClick={ plus( dispatch, 10  ) }>+10</Button> 
           <Button onClick={ plus( dispatch, 100 ) }>+100</Button>
           <Button onClick={ e => dispatch( { type: "reset" } ) }>Reset</Button> 
        </div>
    )
}
