
import IfAuth     from "./Auth/IfAuth";
import AuthButton from "./Auth/AuthButton";
import AddPost    from "./Post/AddPost";
import Posts      from "./Post/Posts";

function App() {
  return <>
    <AuthButton/>
    <IfAuth>
      <AddPost/>
      <Posts/>
    </IfAuth>
  </>;
}

export default App;
