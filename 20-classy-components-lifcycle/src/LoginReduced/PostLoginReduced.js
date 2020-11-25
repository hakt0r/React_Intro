
import { Provider } from "react-redux";
import PostLogin    from "./PostLogin";
import { store }    from './redux';

export default function (){
  return <Provider store={store}>
    <PostLogin/>
  </Provider>;
}