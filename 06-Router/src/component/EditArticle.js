
import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';

export default function EditArticle(props) {
    const params  = useParams();
    const history = useHistory();
    const article = props.list[params.title];
    const [ value, setValue ] = React.useState(article);
    // const state   = useState(article);
    // const value    = state[0];
    // const setValue = state[1]; 
    return ( <div>
        <Form.Control value={value} onChange={
            e => setValue(e.target.value)
        }/>
        <Button onClick={
            e => {
                props.changeArticle(params.title,value);
                history.push(`/article/${params.title}`);
                // window.location = ...
            }
        }>Save</Button>
        <Link to={`/article/${params.title}`}>
            <Button>
                Cancel
            </Button>
        </Link>
    </div> )
}
