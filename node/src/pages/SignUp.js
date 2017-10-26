import JSXComponent from 'metal-jsx';

import { createAccount } from '../auth/Auth';

class SignUp extends JSXComponent {
  render() {
    return (
      <div>
        <h1>{'Sign Up'}</h1>

        <form name="user" class="container" onSubmit={createAccount}>
          <input name="name" type="text" placeholder="Name" required />

          <input name="email" type="email" placeholder="Email" required />

          <input name="password" type="password" placeholder="Password" required />

          <button type="submit">{'Create Account'}</button>
        </form>

        <a href="/login">{'Back to login'}</a>
      </div>
    );
  }
}

export default SignUp;
