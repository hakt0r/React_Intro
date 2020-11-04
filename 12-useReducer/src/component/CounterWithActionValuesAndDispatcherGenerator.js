
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

export default function CounterWithActionValuesAndDispatcherGenerator() {
    // const [value,dispatch] = useReducer(reducer,0);
    const stateCouple = useReducer(reducer,0);
    const value       = stateCouple[0];
    const dispatch    = stateCouple[1];

    function plus ( howMuch ){
        return function theEventHandler (e){
            dispatch( { type: "plus", howMuch } );
        }
    }

    return (
        <div>
           <span>{value}</span>
           {/*                              vvvvvvvvvvvv action vvvvvvvvv */}
           <Button onClick={ plus(1)   }>+1</Button>
           <Button onClick={ plus(10)  }>+10</Button> 
           <Button onClick={ plus(100) }>+100</Button>
           {/*               e => dispatch( { type: "plus", howMuch } )   */} 
           <Button onClick={ e => dispatch( { type: "reset" } ) }>Reset</Button> 
        </div>
    )
}
