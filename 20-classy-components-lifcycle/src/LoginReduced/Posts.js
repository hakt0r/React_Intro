
import { Button } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { deletePost, updatePosts } from './actions';

class Posts extends React.Component {
  componentDidMount(){
    updatePosts();
  }
  render(){
    return this.props.posts.map(
      (post,index) =>
        <div key={index}>
          {post.message}
          <Button onClick={ e => deletePost(post.id)} >
            X
          </Button>
        </div>
    );
  }
}


const withAuth = connect(
  ({posts}) => ({posts})
);

export default withAuth(Posts);
