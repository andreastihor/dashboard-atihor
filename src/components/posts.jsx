import React , {Component} from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios'

export default class Post extends Component {
  state = {
    posts: [],
    query : ''
  };

  componentWillMount() {
    console.log(this.props);
      axios.get('http://localhost:3000/')
      .then(res => {
        this.setState({posts : res.data})
      });
  }

handleChangeTags = () => {
  this.setState({query : this.props.query})
}

  render () {
    return (

      <ul>
      {this.state.posts.map(post =>
        <li key ={post.id}>
          <h3>Title : {post.title}</h3>
          <p>Post : {post.content} </p>
          <p>Tags : </p> <ul> {post.tags.map(tag => <li key = {tag.id}> {tag.name}  </li>)}  </ul>
          <NavLink to={`/${post.id}`}> <button>Detail</button></NavLink>
        </li>
      )}
      </ul>
    )
  }



}
