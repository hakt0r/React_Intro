
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

export default function Add(props) {

    const stateBundle = useState("");
    const input    = stateBundle[0];
    const setInput = stateBundle[1];

    return ( <>
        <Form.Control
            value={input}
            onChange={ e => setInput(e.target.value) }
        />
        <Button onClick={ e =>{
            props.addItem(input);
            setInput("");
        }}>
            Add
        </Button>
    </> );
}
