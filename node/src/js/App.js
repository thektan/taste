import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Container } from 'reactstrap';
import NavBar from './components/NavBar';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'react-select/dist/react-select.css';
import '../css/App.css';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import User from './pages/User';
import PlaceCreate from './pages/PlaceCreate';
import Place from './pages/Place';
import { currentUser } from './utils/auth';

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <NavBar currentUser={currentUser} />

          <Route exact path="/" component={Home} />

          {!currentUser && (
            <Fragment>
              <Route exact path="/signin" component={SignIn} />

              <Route exact path="/signup" component={SignUp} />
            </Fragment>
          )}

          {currentUser && (
            <Route exact path="/create/place" component={PlaceCreate} />
          )}

          <Route exact path="/place/:id" component={Place} />

          <Route exact path="/user/:id" component={User} />
        </Container>
      </Router>
    );
  }
}

export default App;
