import React , {Component} from 'react'
import Header from './header'
import axios from 'axios'
import NotAuthorize from './Not Authorize'

class detailPost extends Component {

  state = {
    id: null,
    title : '',
    content : '',
    tags : [],
    tagsChange:''
  };

  componentDidMount () {
    var id =this.props.match.params.id;
    axios.get('http://localhost:3000/'+id)
    .then(res => {
      const tagx = res.data.tags.map(({name}) => name);
      this.setState({
        id : res.data.id,
        title : res.data.title,
        content : res.data.content,
        tags : res.data.tags,
        tagsChange : tagx.join(",")
      })
    })
  }
  handleSubmit = event => {
    event.preventDefault();
    console.log('this tagschange : ',this.state.tagsChange);
    const article = {
      title : this.state.title,
      content : this.state.content,
      tags : this.state.tagsChange
    };
    var token = document.cookie
    token = token.split('=');
    token = token[1]
    axios.put('http://localhost:3000/'+this.state.id+'/updatePost' , article ,{
      headers: {
        token : token
      }
    })
    .then (res => {
      if (res.status === 200) {
          this.props.history.push('/')
      }
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
    this.setState({tagsChange : event.target.value })

  }

render () {
  if (document.cookie) {
    const tags = this.state.tags.map(({name}) => name);
    return (
      <div>
      <Header/>
      <form onSubmit = {this.handleSubmit} method = "POST">
        <label htmlFor="title">Title</label>
        <input name= "title" type= "text" defaultValue = {this.state.title} onChange = {this.handleChangeTitle} /> <br/>
        <label htmlFor="content">Content</label>
        <input name= "content" type= "text" defaultValue = {this.state.content} onChange = {this.handleChangeContent} /> <br/>
        <label htmlFor="tags">Tags</label>
        <input name= "tags" type= "text" defaultValue = {tags.join(",")} onChange = {this.handleChangeTags} /> <br/>
        <input type= "submit" value = "update"/>
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
export default detailPost
