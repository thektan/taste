import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Container } from 'reactstrap';
import NavBar from './components/NavBar';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import User from './pages/User';
import { currentUser } from './utils/auth';

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <NavBar currentUser={currentUser} />

          <Route exact path="/" component={Home} />

          <Route exact path="/signin" component={SignIn} />

          <Route exact path="/signup" component={SignUp} />

          <Route exact path="/user/:id" component={User} />
        </Container>
      </Router>
    );
  }
}

export default App;
