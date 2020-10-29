
// Why useState return an array
//   internally it works sth like this

function useState (defaultValue) {
    function setState(){ /*...*/ } // creates a setter function
    let value = defaultValue;      // creates a value
    return [value, setState];      // returns both inside an array
}

// thats why when we useState,
// we usually destructure value and setter fucntion
// in one line like this

const [ value, setValue ] = useState();

// this translates to :

const stateBundle = useState([]);   // stateBundle is an array
const list        = stateBundle[0]; // value
const setList     = stateBundle[1]; // function
