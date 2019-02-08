import React, { Component } from 'react';
import Routing  from './components/routing'
import {BrowserRouter} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
      <React.Fragment>
      <Routing/>
      </React.Fragment>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
