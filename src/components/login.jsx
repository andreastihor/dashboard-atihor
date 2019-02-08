import React , {Component} from 'react'
import Header from './header'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

class Login extends Component {

  state = {
      username : '',
      password : ''
  };

  handleSubmit = event => {
    event.preventDefault();
    const user = {
      username : this.state.username,
      password : this.state.password
    };
    axios.post('http://localhost:3000/signin' , user)
    .then (res => {
      //set cookie
      document.cookie = res.data
      this.props.history.push('/')
      //redirect
    })
    .catch(err => {
      console.log(err);
    })
  };

  handleChangeUsername = event => {
    this.setState({username : event.target.value })
  }
  handleChangePassword = event => {
    this.setState({password : event.target.value })
  }

  render () {
    return (
      <div>
      <Header />
      <form onSubmit = {this.handleSubmit}>
      <label htmlFor="username">Login</label>
      <input name= "username" type= "text" onChange = {this.handleChangeUsername} /> <br/>
      <label htmlFor="password">Password</label>
      <input name= "password" type= "password" onChange = {this.handleChangePassword} /> <br/>
      <input type = "submit" value="Login" />
      </form>
      </div>
    )
  }
}

export default Login
