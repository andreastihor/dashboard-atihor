import React , {Component} from 'react'
import Header from './header'
import axios from 'axios'
import NotAuthorize from './Not Authorize'

class detailPost extends Component {

  state = {
    id: null,
    title : '',
    content : '',
    tags : []
  };

  componentDidMount () {
    var id =this.props.match.params.id;
    axios.get('http://localhost:3000/'+id)
    .then(res => {
      this.setState({
        id : res.data.id,
        title : res.data.title,
        content : res.data.content,
        tags : res.data.tags
      })
    });
  }
  routeChange = () => {
      let path = `/${this.state.id}/update`;
      this.props.history.push(path);
  }
  delete = () => {
    var token = document.cookie
    token = token.split('=');
    token = token[1];
    axios.delete('http://localhost:3000/'+this.state.id+'/deletePost',{
      headers : {
        token : token
      }
    })
    .then(this.props.history.push('/'))
  }

  nameTag = () => {
    const tags = this.state.tags.map(tag => {
      return tag.name
    })
    return tags.join(',')
  }
render () {
  if (document.cookie) {
    return (
      <div>
      <Header/>

      <label htmlFor="title">Id : </label>
      <label htmlFor="title">{this.state.id}</label> <br/>
      <label htmlFor="title">Title : </label>
      <label htmlFor="title">{this.state.title}</label> <br/>
      <label htmlFor="content">Content : </label>
      <label htmlFor="title">{this.state.content}</label> <br/>
      <label htmlFor="tags">Tags : </label>
      <label htmlFor="title">{this.nameTag()}</label> <br/>
      <button onClick = {this.routeChange} >Update</button>
      <button onClick = {this.delete}>Delete</button>
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
