
import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

function State() {
    const [ state, setState ] = React.useState(0); // we dont need to import explicitly
    const [ state2, setState2 ] = useState(); // if we import it from react
    //    value ^  ^ setter function
    //               1. change value
    //               2. re-render the component
    return <Card>
        {state}
        <Button onClick={ e => setState( state + 1 ) }>+</Button>
        <Button onClick={ e => setState( state - 1 ) }>-</Button>
    </Card>;
}

class ClassyState extends React.Component {
    constructor(props){
        super(props);
        this.state = 0;
    }
    render () {
        return <Card>
            {this.state}
            <button onClick={ e => this.setState( this.state + 1 ) }>+</button>
            <button onClick={ e => this.setState( this.state - 1 ) }>-</button>
        </Card>;
    }
}


export default State;
