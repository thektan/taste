import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../css/App.css';

import Home from './pages/Home';
// import Login from './pages/Login';
import User from './pages/User';
// import UIKit from './js/ui-kit';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Taste</h1>

          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/User">About</a>
            </li>
          </ul>

          <Route exact path="/" component={Home} />

          <Route exact path="/User" component={User} />
        </div>
      </Router>
    );
  }
}

export default App;
