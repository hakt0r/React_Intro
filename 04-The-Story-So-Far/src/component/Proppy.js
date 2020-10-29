
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

function Proppy(props) {
    return <Card>I'm a Proppy with value: {props.value}!</Card>;
}

class ClassyProppy extends React.Component {
    render () {
        return <Card>I'm a Classy Proppy with value: {this.props.value}!</Card>;
    }
}

export default Proppy;
