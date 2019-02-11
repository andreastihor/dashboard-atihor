import React , {Component} from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios'

export default class Post extends Component {
  state = {
    posts: [],
    search : []
  };

  componentWillMount() {
      axios.get('http://localhost:3000/')
      .then(res => {
        this.setState({posts : res.data})
      });
  }

  componentWillReceiveProps(nextProps) {
    this.getNewComponent(nextProps.query)
  }

  getNewComponent(query) {
    console.log(query);
    if (query!= '') {
      axios.get('http://localhost:3000/search/'+query)
      .then(res => {
        if (res.data[0].message != 'id undefined!') {
          this.setState({search : res.data})
        }
      })
    }
    else {
      this.setState({search : []})
    }
  }

  render () {
    return (
      <ul>
      {this.state.search.length <= 0 ? this.state.posts.map(post =>
        <li key ={post.id}>
          <h3>Title : {post.title}</h3>
          <p>Post : {post.content} </p>
          <p>Tags : </p> <ul> {post.tags.map(tag => <li key = {tag.id}> {tag.name}  </li>)}  </ul>
          <NavLink to={`/${post.id}`}> <button>Detail</button></NavLink>
        </li>
      ) :
      this.state.search[0].map(p => {
        return <li key ={p.post.id}>
          <p> Title : {p.post.title}</p>
          <p> Content : {p.post.content}</p>
          <p> Title : {p.tag.name}</p>
        </li>
        // return <li key ={p.post.id}>
        //     <h3>Title : {p.post.title}</h3>
        //     <p>Post : {p.post.content} </p>
        //     <p>Tags : </p> {<li key = {p.tag.id}> {tag.name}  </li> }
        //   </li>
      })
  }
      </ul>
    )
  }



}
