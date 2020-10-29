
import React from 'react';
import Table from 'react-bootstrap/Table';
import Card  from 'react-bootstrap/Card';

function Skills (props) {
    const { data } = props;
    return (
    <Card>
        <Card.Body>
        <Table striped bordered hover>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Skill</th>
            </tr>
        </thead>
        <tbody>
        { data.map(
            ({name,age,skill},index) =>
            <tr key={index}>
                <td>{name}</td>
                <td>{age}</td>
                <td>{skill}</td>
            </tr>
        ) }
        </tbody>
        </Table>
    </Card.Body>
    </Card> );
}

export default Skills;