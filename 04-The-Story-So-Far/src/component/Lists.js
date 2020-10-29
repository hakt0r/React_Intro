
import React, { useState } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

function Lists ( { listData = [] } ) {
    return <Card>
        <h2>Behold! A list :D</h2>
        <ListGroup>
            { listData.map( ( name, index ) => 
                <ListGroupItem key={index}>{name}</ListGroupItem>
            ) }
        </ListGroup>
    </Card>;
}

export default Lists;
