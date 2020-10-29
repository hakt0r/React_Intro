
import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import Functional from './Functional';

class Classy extends Component {
    render () {
        return <>
            <Functional/>
            <Card>I'm a Class!</Card>
        </>;
    }
}

export default Classy;
