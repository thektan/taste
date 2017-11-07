import JSXComponent from 'metal-jsx';

class User extends JSXComponent {
  render() {
    return (
      <div>
        <h1>User {this.props.router.params.id}</h1>
      </div>
    );
  }
}

export default User;
