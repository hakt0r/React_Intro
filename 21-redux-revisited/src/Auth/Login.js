

import { Button } from "@material-ui/core";
import { login }  from "./actions";

export default function Login (){
  return <Button onClick={login}>Login</Button>;
}