import React , {Component} from 'react'
import axios from 'axios'

export default class Post extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios.get('http://localhost:3000/')
    .then(res => {
      this.setState({posts : res.data})
    });
  }

  render () {
    return (
      <ul>
      {this.state.posts.map(post =>
        <li key ={post.id}>
          <h3>Title : {post.title}</h3>
          <p>Post : {post.content} </p>
          <p>Tags : </p> <ul> {post.tags.map(tag => <li key = {tag.id}> {tag.name}  </li>)}  </ul>
        </li>
      )}
      </ul>
    )
  }



}
