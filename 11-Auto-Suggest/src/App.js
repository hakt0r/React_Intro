
import { useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";

import './autosuggest.css';

const list = [
  {title:"Cape Verde"},
  {title:"Iceland"},
  {title:'Estonia'},
  {title:'Guinea-Bissau'},
  {title:'Iraq'},
  {title:'India'},
  {title:'Macau SAR China'},
  {title:'Guam'},
  {title:'St. Lucia'},
  {title:'Tunisia'},
  {title:'Turks & Caicos Islands'},
  {title:'American Samoa'},
];

function App() {
  const [state, setState] = useState('');
  const filtered = list.filter( item => item.title.match(state) );
  return (
    <div className="App">
      <InputGroup>
        { state === '' ? null : <ul>{
          filtered
          .map( item => <li>
            <a onClick={
              e => setState(item.title)
            }>{
              item.title
            }</a></li> )
        }</ul> }
        <FormControl value={state} onChange={e=>setState(e.target.value)}/>
        <InputGroup.Append>
          <Button>Search</Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
}

export default App;
