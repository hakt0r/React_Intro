
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

export default function Edit(props) {

    const stateBundle = useState(props.data);
    const input    = stateBundle[0];
    const setInput = stateBundle[1];

    return ( <>
        <Form.Control
            value={input}
            onChange={ e => setInput(e.target.value) }
        />
        <Button onClick={ e => {
            props.changeItem( props.index, input );
            props.setEditing(false);
        }}>
            Save
        </Button>
    </> );
}
