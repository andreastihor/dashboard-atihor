import React , {Component} from 'react'
import Header from './header'
import axios from 'axios'
import NotAuthorize from './Not Authorize'

class CreatePost extends Component {

  state = {
    title : '',
    content : '',
    tags : []
  };

  handleSubmit = event => {
    event.preventDefault();
    const article = {
      title : this.state.title,
      content : this.state.content,
      tags : this.state.tags
    };
    axios.post('http://localhost:3000/createPost' , article ,{
      headers: {
        token : document.cookie
      }
    })
    .then (res => {
      this.props.history.push('/')
    })
    .catch(err => {
      console.log(err,'error cuy');
    })
  };

  handleChangeTitle = event => {
    this.setState({title : event.target.value })
  }

  handleChangeContent = event => {
    this.setState({content : event.target.value })
  }

  handleChangeTags = event => {
    this.setState({tags : event.target.value })
  }

render () {
  if (document.cookie) {
    return (
      <div>
      <Header/>
      <form onSubmit = {this.handleSubmit} method = "POST">
      <label htmlFor="title">Title</label>
      <input name= "title" type= "text" onChange = {this.handleChangeTitle} /> <br/>
      <label htmlFor="content">Content</label>
      <input name= "content" type= "text" onChange = {this.handleChangeContent} /> <br/>
      <label htmlFor="tags">Tags</label>
      <input name= "tags" type= "text" onChange = {this.handleChangeTags} /> <br/>
      <input type= "submit" value = "add"/>
      </form>
      </div>
    )
  }
  return (
    <div>
    <NotAuthorize/>
    </div>
  )

}
}
export default CreatePost
