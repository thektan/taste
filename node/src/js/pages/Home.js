import React, { Component } from 'react';
import { UncontrolledAlert } from 'reactstrap';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>

        <UncontrolledAlert color="info">
          This is a test for reactstrap.
        </UncontrolledAlert>
      </div>
    );
  }
}

export default Home;
