
import React, { useReducer } from 'react';
import { Button } from 'react-bootstrap';

const reducer = ( value, action ) => {
    //                   ^ { type: "plus1", ... }
    switch ( action.type ){
        case "plus1":   return value + 1;
        case "plus10":  return value + 10;
        case "plus100": return value + 100;
        case "reset":   return 0;
        default:        return value;
    }
}

export default function Counter() {
    // const [value,dispatch] = useReducer(reducer,0);
    const stateCouple = useReducer(reducer,0);
    const value       = stateCouple[0];
    const dispatch    = stateCouple[1];
    return (
        <div>
           <span>{value}</span>
           <Button onClick={ e => dispatch( { type: "plus1"   } ) }>+1</Button> 
           <Button onClick={ e => dispatch( { type: "plus10"  } ) }>+10</Button> 
           <Button onClick={ e => dispatch( { type: "plus100" } ) }>+100</Button> 
           <Button onClick={ e => dispatch( { type: "reset"   } ) }>Reset</Button> 
        </div>
    )
}
