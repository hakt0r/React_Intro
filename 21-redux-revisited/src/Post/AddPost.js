
import { Button, TextField } from "@material-ui/core";
import { useSelector } from "react-redux";

import {
  changeInput, sendMessage
} from "./actions";

export default function AddPost () {
  const message = useSelector( state => state.post.message );
  return <form>
  <TextField
    value={ message }
    onChange={ e => changeInput(e.target.value) }
  />
  <Button onClick={ sendMessage }>
    Send
  </Button>
  </form>;
}