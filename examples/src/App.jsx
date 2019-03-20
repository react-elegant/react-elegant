import React, { Component } from 'react';
// import './App.css';
// import logo from './logo.svg';
import { HashRouter as Router, Route } from 'react-router-dom';

import Routers from './router.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/Button" exact component={Routers['/Button']} />
          <Route path="/" exact component={Routers['/Index']} />
        </div>
      </Router>
    );
  }
}

export default App;
