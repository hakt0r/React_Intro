
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Edit from './Edit';

function Item (props) {
    const { data, deleteItem, index, changeItem } = props;
    // const data       = props.data;
    // const deleteItem = props.deleteItem;
    // const index      = props.index;
    // const changeItem = props.changeItem;

    const [ editing, setEditing ] = useState(false);
    // const editBundle = useState(false);
    // const editing    = editBundle[0];
    // const setEditing = editBundle[0];
    
    if ( editing ) return <Edit
        data={data}
        index={index}
        changeItem={changeItem}
        setEditing={setEditing}
    />

    return <div>
        {data}

        <Button onClick={
            e => setEditing(true)
        }>Edit</Button>

        <Button onClick={
            e => deleteItem(index)
        }>Delete</Button>

    </div>;
}

export default Item;