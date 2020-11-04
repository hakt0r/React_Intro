
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

export default function CounterWithActionValues() {
    // const [value,dispatch] = useReducer(reducer,0);
    const stateCouple = useReducer(reducer,0);
    const value       = stateCouple[0];
    const dispatch    = stateCouple[1];
    return (
        <div>
           <span>{value}</span>
           {/*                              vvvvvvvvvvvv action vvvvvvvvv */}
           <Button onClick={ e => dispatch( { type: "plus", howMuch:1   } ) }>+1</Button> 
           <Button onClick={ e => dispatch( { type: "plus", howMuch:10  } ) }>+10</Button> 
           <Button onClick={ e => dispatch( { type: "plus", howMuch:100 } ) }>+100</Button> 
           <Button onClick={ e => dispatch( { type: "reset"             } ) }>Reset</Button> 
        </div>
    )
}
