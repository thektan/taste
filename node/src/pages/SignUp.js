import JSXComponent from 'metal-jsx';

import { createAccount } from '../auth/Auth';

class SignUp extends JSXComponent {
  render() {
    return (
      <div>
        <h1>{'Sign Up'}</h1>

        <form name="user" class="container" onSubmit={createAccount}>
          <div class="form-group">
            <label for="signupName">Name</label>
            <input
              type="email"
              class="form-control"
              id="signupName"
              aria-describedby="emailHelp"
              name="email"
              placeholder="Enter email"
              required
            />
          </div>

          <div class="form-group">
            <label for="signupEmail">Email address</label>
            <input
              type="email"
              class="form-control"
              id="signupEmail"
              aria-describedby="emailHelp"
              name="email"
              placeholder="Enter email"
              required
            />
          </div>

          <div class="form-group">
            <label for="signupPassword">Password</label>
            <input
              type="password"
              class="form-control"
              id="signupPassword"
              name="password"
              placeholder="Password"
              required
            />
          </div>

          <button class="btn btn-primary" type="submit">
            {'Create Account'}
          </button>
        </form>

        <a href="/login">{'Back to login'}</a>
      </div>
    );
  }
}

export default SignUp;
