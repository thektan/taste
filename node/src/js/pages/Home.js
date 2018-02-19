import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import { ROUTES } from '../utils/routes';

class Home extends Component {
  render() {
    return (
      <Container>
        <h1>Home</h1>

        <Link to={ROUTES.PLACE_CREATE}>Create a new place</Link>
      </Container>
    );
  }
}

export default Home;
