
import React from 'react';

import { context } from './Context';

export default function AnxExample() {
    return (
    <div onClick={e => context.changeName('ok') }>
        {context.state.name}
    </div> );
}
