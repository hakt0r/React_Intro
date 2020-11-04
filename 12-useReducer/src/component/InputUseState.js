
import React, { useState } from 'react';
import { FormControl } from 'react-bootstrap';

export default function InputUseState() {
    const [state, setState] = useState('');
    return (
        <div>
            <FormControl
                value={state}
                onChange={ e => setState(e.target.value) } />
        </div>
    )
}
