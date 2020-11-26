

import { Satellite } from "@material-ui/icons";
import { useSelector } from "react-redux";

import Login  from "./Login";
import Logout from "./Logout";

export default function AuthButton (){
  const token = useSelector( state => state.auth.token );
  if ( token ) return <Logout/>;
  else         return <Login/>;
}