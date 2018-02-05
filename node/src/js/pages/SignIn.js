import React, { Component } from 'react';
import { Button, Container, Form, FormGroup, Label, Input } from 'reactstrap';

import { signIn } from '../utils/auth';

class SignIn extends Component {
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

          <Form onSubmit={signIn}>
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
            {"Don't have an account? "} <a href="/signup">Create one here</a>
          </small>
        </div>
      </Container>
    );
  }
}

export default SignIn;
