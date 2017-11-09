import JSXComponent from 'metal-jsx';
import { signIn } from '../auth/Auth';

class Login extends JSXComponent {
  render() {
    return (
      <div>
        <h1>{'Login'}</h1>

        <form name="user" class="container" onSubmit={signIn}>
          <div class="form-group">
            <label for="loginEmail">Email address</label>
            <input type="email" class="form-control" id="loginEmail" aria-describedby="emailHelp" name="email" placeholder="Enter email" required />
          </div>

          <div class="form-group">
            <label for="loginPassword">Password</label>
            <input type="password" class="form-control" id="loginPassword" name="password" placeholder="Password" required />
          </div>

          <button class="btn btn-primary" type="submit">{'Login'}</button>
        </form>

        <a href="/signup">{'Create an account'}</a>
      </div>
    );
  }
}

export default Login;
