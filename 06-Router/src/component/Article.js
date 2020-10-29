

import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

export default function Article(props) {
    const params  = useParams();
    const article = props.list[params.title];
    return (
        <div>
            { article }
            <Link to={`/edit/${params.title}`}>
                <Button>Edit</Button>
            </Link>
        </div>
    )
}
