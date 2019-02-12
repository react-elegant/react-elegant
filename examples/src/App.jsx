import React, { Component } from 'react';
// import './App.css';
// import logo from './logo.svg';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Routers from './router.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/Button">Button</Link>
              </li>
            </ul>
          </nav>
          <Route path="/Button" exact component={Routers['/Button']} />
        </div>
      </Router>
    );
  }
}

export default App;
