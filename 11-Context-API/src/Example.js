
import React, { useContext } from 'react';
import { StateContext }      from './App';

export default function Example() {
    const state = useContext(StateContext);
    return (
    <div onClick={e => state.changeName('ok') }>
        {state.name}
    </div> );
}
