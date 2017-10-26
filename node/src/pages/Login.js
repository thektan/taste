import JSXComponent from 'metal-jsx';
import { signIn } from '../auth/Auth';

class Login extends JSXComponent {
  render() {
    return (
      <div>
        <h1>{'Login'}</h1>

        <form name="user" class="container" onSubmit={signIn}>
          <input name="email" type="email" placeholder="Email" required />

          <input name="password" type="password" placeholder="Password" required />

          <button type="submit">{'Login'}</button>
        </form>

        <a href="/signup">{'Create an account'}</a>
      </div>
    );
  }
}

export default Login;
