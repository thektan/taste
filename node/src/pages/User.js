import JSXComponent, { Config } from 'metal-jsx';
import { AUTH } from '../auth/Auth';

class User extends JSXComponent {
  created() {
    AUTH.getUser(this.props.router.params.userId)
      .then(({ name }) => {
        this.state.name = name;
      })
      .catch(() => {
        this.state.name = 'User could not be found.';
      });
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

User.STATE = {
  name: Config.string(),
};

export default User;
