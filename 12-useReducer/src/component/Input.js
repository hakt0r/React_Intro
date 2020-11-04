
import React, { useReducer } from 'react';
import { FormControl } from 'react-bootstrap';

function reducer( state, action ){
    switch (action.type) {
        case "change": return action.value;

        case "key":
            console.log(action)
            if ( action.key === 'Enter' ) return '';
            return state;

        case "event":
            if ( action.which === 'focus' ) return 'hello';
            else return 'bye';

        default:
            return state;
    }
}

export default function Input() {
    const [ state, dispatch ] = useReducer(reducer,'');
    const change  = e => dispatch({ type:"change", value:e.target.value });
    const keydown = e => dispatch({ type:"key", key:e.key });
    const event   = (which) => e => dispatch({ type:"event", which });
    return (
        <div>
            <FormControl value={state}
                onChange={change}
                onKeyDown={keydown}
                onFocus={event('focus')}
                onBlur={event('blur')}
            />
        </div>
    )
}
