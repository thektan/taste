import React, { Component } from 'react';
// import { AUTH } from '../auth/Auth';

class User extends Component {
  // created() {
  //   AUTH.getUser(this.props.router.params.userId)
  //     .then(({ name }) => {
  //       this.state.name = name;
  //     })
  //     .catch(() => {
  //       this.state.name = 'User could not be found.';
  //     });
  // }

  render() {
    return (
      <div>
        <h1>User Name</h1>
      </div>
    );
  }
}

export default User;
