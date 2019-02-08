import React , {Component} from 'react'
import NavBar from './navbar'
import Post from './posts'

class Home extends Component {
  render () {
    return (
      <div>
        <NavBar/>
        <Post />
      </div>
    )
  }
}

export default Home
