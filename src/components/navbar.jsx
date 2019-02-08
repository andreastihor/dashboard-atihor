import React , {Component} from 'react'
import {NavLink} from 'react-router-dom'

class NavBar extends Component {

  onClick = event => {
    document.cookie = "user =; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
  }

  render () {
    if (document.cookie) {
      return (
          <React.Fragment>
          <NavLink to = "/"> <button>Home</button></NavLink>
          <NavLink to ="/"> <button onClick = {this.onClick}>Logout</button> </NavLink>
          <NavLink to = "/createPost"> <button>CreatePost</button></NavLink>
          <br/> <br/> <br/>
          </React.Fragment>
      )
    }
    else {
      return (
        <React.Fragment>
        <NavLink to = "/"> <button>Home</button></NavLink>
        <NavLink to = "/login"> <button>Login</button> </NavLink>
        <br/> <br/> <br/>
        </React.Fragment>
      )
    }

  }
}

export default NavBar
