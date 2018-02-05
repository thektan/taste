import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Label, Input } from 'reactstrap';

import { signUp } from '../utils/auth';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleSignUp(event) {
    signUp(event)
      .then(() => {
        this.props.history.push('/signin');
      })
      .catch(err => {
        alert(
          'An error has occurred and we were unable to create your account.'
        );

        console.log(err);
      });
  }

  render() {
    return (
      <Container>
        <div className="signin-container">
          <h1>
            {'Create your new account '}
            <span aria-label="wave" role="img">
              ✨
            </span>
          </h1>

          <Form onSubmit={this.handleSignUp}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="name" name="name" id="name" placeholder="Name" />
            </FormGroup>

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
              {'Create account'}
            </Button>

            <small className="signin-signup text-muted">
              {'Already have an account? '}

              <Link to="/signin">Sign in here</Link>
            </small>
          </Form>
        </div>
      </Container>
    );
  }
}

export default SignUp;
