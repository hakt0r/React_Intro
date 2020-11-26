import { Card } from "@material-ui/core";
import { useSelector } from "react-redux"

export default function Posts () {
  const posts = useSelector( state => state.post.posts );
  return posts.map( post =>
    <Card>
      {post}
    </Card>
  );
}