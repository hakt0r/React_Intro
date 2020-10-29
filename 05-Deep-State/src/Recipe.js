
import React, { useState } from 'react';

function App() {

    const [ list, setList ] = useState([]);

    function addItem ( item ) {
        setList( [ item, ...list ] );
    }

    function deleteItem (index){
        list.splice( index, 1 );
        setList( [...list] );
    }

    return ( <>
        <Add addItem={addItem}/>
        { list.map( (data,index) =>
            <Item key={index}
                index={index}
                data={data}
                deleteItem={deleteItem}
            />
        )}
    </> );
}

function Add({addItem}) {
    const [ input, setInput ] = useState("");
    return ( <>
        <input
            value={input}
            onChange={ e => setInput(e.target.value) }
        />
        <button onClick={ e =>{
            addItem(input);
            setInput("");
        }}>
            Add
        </button>
    </> );
}

function Item ({data,deleteItem,index}) {
    return <>
        {data}
        <button onClick={
            e => deleteItem(index)
        }>Delete</button>
    </>;
}

export default App;
