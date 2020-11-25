
import React from 'react'

export default class Posts extends React.Component {
  state = {
    fetching:true,
    posts:[]
  }
  componentDidMount(){
    this.props.setUpdateFunction(this.update);
    this.update();
  }
  update = async () => {
    const response = await fetch('/api/post/',{
      headers: { "Authorization": this.props.token }
    });
    const posts = await response.json();
    this.setState({posts});
  }
  render(){
    console.log(this.state);
    return this.state.posts.map(
      (post,index) => <div key={index}>{post.message}</div>
    );
  }
} 