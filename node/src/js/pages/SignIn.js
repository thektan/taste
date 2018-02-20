import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Label, Input } from 'reactstrap';

import { signIn } from '../utils/auth';
import { ROUTES } from '../utils/routes';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.handleSignIn = this.handleSignIn.bind(this);
  }

  handleSignIn(event) {
    signIn(event)
      .then(({ id }) => {
        window.location = `/user/${id}`; // Not using react-router here so the navbar will be refreshed as well.
      })
      .catch(err => {
        alert('Sign in failed. Your email or password may be incorrect.');

        console.log(err);
      });
  }

  render() {
    return (
      <Container>
        <div className="signin-container">
          <h1>
            {'Welcome! '}
            <span aria-label="wave" role="img">
              👋
            </span>
          </h1>

          <Form onSubmit={this.handleSignIn}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="Email" />
            </FormGroup>

            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </FormGroup>

            <Button color="primary" block>
              Sign In
            </Button>
          </Form>

          <small className="signin-signup text-muted">
            {"Don't have an account? "}

            <Link to={ROUTES.SIGNUP}>Create one here</Link>
          </small>
        </div>
      </Container>
    );
  }
}

export default SignIn;
