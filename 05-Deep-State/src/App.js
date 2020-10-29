
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Add from './component/Add';
import Item from './component/Item';

function App() {

    const stateBundle = useState([]);   // stateBundle is an array
    const list        = stateBundle[0]; // value
    const setList     = stateBundle[1]; // function

    function addItem ( item ) {
        // list.push(item); // add item to list
        // const newArray = list.slice(); // copy array
        // setList( newArray ); // notify react
        // setList( list.concat([item]) );
        setList( [ item, ...list ] );
    }

    function deleteItem ( index ){
        //           start  howmany, [insert], [inset], ....
        list.splice( index, 1 ); // remove element from list
        setList( [...list] );    // setList( list.slice() )
        console.log('after delete',list)
    }

    function changeItem ( index, value ){
        list[index] = value;
        setList( [...list] );
    }

    console.log('before render',list)

    return (
    <Card>
        <Card.Header>
            <Add addItem={addItem}/>
        </Card.Header>
        <Card.Body>
            { list.map( (data,index) =>
                <Item key={index}
                    index={index}
                    data={data}
                    deleteItem={deleteItem}
                    changeItem={changeItem}
                />
            )}
        </Card.Body>
    </Card>
    );
}

export default App;
