import React , {Component} from 'react'
import NavBar from './navbar'
import Post from './posts'

class Home extends Component {

  state = {
    query : ''
  };

  onSubmit =  event => {
    event.preventDefault();
    this.sendQuery()
  }
  sendQuery = () => {
    return this.state.query
  }

  handleChangeTags = (event) => {
    this.setState({query : event.target.value} )
  }

  render () {
    return (
      <div>
        <NavBar/>
        <div>
          <form onSubmit = {this.onSubmit}>

            <label htmlFor = "search"> Search</label> <input type=  "text" name="search" onChange = {this.handleChangeTags} />
          </form>
        </div>
        <Post query = {this.sendQuery()} />
      </div>
    )
  }
}

export default Home
