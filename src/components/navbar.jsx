import React , {Component} from 'react'
import {NavLink} from 'react-router-dom'

class NavBar extends Component {
  render () {
    return (
      <React.Fragment>
      <NavLink to = "/"> <button>Home</button></NavLink>
      <NavLink to = "/login"> <button>Login</button> </NavLink>
      <NavLink to = "/createPost"> <button>CreatePost</button></NavLink>
      <br/> <br/> <br/>
      </React.Fragment>
    )
  }
}

export default NavBar
