import JSXComponent from 'metal-jsx';
import { currentUser, signOut } from '../auth/Auth';

class Navbar extends JSXComponent {
  render() {
    return (
      <ul role="navigation">
        <li>
          <a href="/">Home</a>
        </li>

        <li>
          <a href="/user">User</a>
        </li>

        <li>
          {
            do {
              if (currentUser) {
                <span>
                  {currentUser.name}

                  <button onClick={signOut}>Sign Out</button>
                </span>;
              } else {
                <a href="/login">Sign In</a>;
              }
            }
          }
        </li>
      </ul>
    );
  }
}

export default Navbar;
