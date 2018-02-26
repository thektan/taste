import React, { Component } from 'react';
import { Container } from 'reactstrap';

import { AUTH } from '../utils/auth';

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };
  }

  componentDidMount() {
    AUTH.auth(process.env.REACT_APP_WEDEPLOY_MASTER_TOKEN)
      .getUser(this.props.match.params.id)
      .then(({ name }) => {
        this.setState({ name });
      })
      .catch(() => {
        this.setState({ name: 'User could be found.' });
      });
  }

  render() {
    return (
      <Container>
        <h1>User Name: {this.state.name}</h1>
      </Container>
    );
  }
}

export default User;
