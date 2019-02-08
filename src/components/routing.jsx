import React , {Component} from 'react';
import {Route, Switch } from 'react-router-dom';

import Home from './home';
import Login from './login';
import CreatePost from './createPost';
import UpdatePost from './updatePost'
import DetailPost from './detailPost'

class Routing extends Component {
  render () {
    return (
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component ={Login} exact />
        <Route path="/createPost" component ={CreatePost} exact />
        <Route path="/:id?" component ={DetailPost} exact />
        <Route path="/:id?/update" component ={UpdatePost} exact />
      </Switch>
    )
  }
}

export default Routing
