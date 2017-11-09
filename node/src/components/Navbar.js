import JSXComponent from 'metal-jsx';
import { currentUser, signOut } from '../auth/Auth';

class Navbar extends JSXComponent {
  render() {
    return (
      <nav class="navbar navbar-expand-sm navbar-light bg-light">
        <a class="navbar-brand" href="/">Taste</a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              {
                do {
                  if (currentUser) {
                    <span>
                      {currentUser.name}

                      <a onClick={signOut}>Sign Out</a>
                    </span>;
                  } else {
                    <a href="/login">Sign In</a>;
                  }
                }
              }
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
