

import { Button } from "@material-ui/core";
import { logout } from "./actions";

export default function Logout (){
  return <Button onClick={logout}>Logout</Button>;
}