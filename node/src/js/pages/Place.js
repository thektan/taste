import React, { Component } from 'react';
import { Container } from 'reactstrap';

import { getPlace } from '../utils/data';

class Place extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };
  }

  componentDidMount() {
    getPlace(this.props.match.params.id)
      .then(({ name }) => {
        this.setState({ name });
      })
      .catch(() => {
        this.setState({ name: 'Place could be found.' });
      });
  }

  render() {
    return (
      <Container>
        <h1>Name: {this.state.name}</h1>
      </Container>
    );
  }
}

export default Place;
