
import React, { useReducer } from 'react';
import { FormControl } from 'react-bootstrap';

function reducer( state, action ){
    switch (action.type) {
        case "change":
            // return { ...state, [action.field]:action.value };
            const newState = { ...state };
            newState[action.field] = action.value;
            return newState;
        default: return state;
    }
}

const defaultState = {
    name:'',
    age:'0'      
};

export default function Inputs() {
    const [ state, dispatch ] = useReducer(reducer,defaultState);
    const change = e => dispatch({
        type:  "change",
        field: e.target.name,
        value: e.target.value
    });
    return (
        <div>
            <FormControl name="name" value={state.name} onChange={change}/>
            <FormControl name="age"  value={state.age}  onChange={change}/>
        </div>
    )
}
