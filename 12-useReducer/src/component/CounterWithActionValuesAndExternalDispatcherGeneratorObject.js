
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

function actions( dispatch ) {
    return {
        plus:  ( howMuch ) => dispatch( { type: "plus", howMuch } ),
        reset:          () => dispatch( { type: "reset" } )
    }
}

export default function CounterWithActionValuesAndExternalDispatcherGeneratorObject() {
    const [ value, dispatch ] = useReducer( reducer, 0 );
    // const { plus, reset } = actions(dispatch);
    const doThe = actions(dispatch);
    const plus  = doThe.plus;
    const reset = doThe.reset;
    return (
        <div>
           <span>{value}</span>
           <Button onClick={ e => plus( 1   ) }>+1</Button>
           <Button onClick={ e => plus( 10  ) }>+10</Button> 
           <Button onClick={ e => plus( 100 ) }>+100</Button>
           <Button onClick={ e => reset()     }>Reset</Button> 
        </div>
    )
}
