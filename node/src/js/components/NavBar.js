import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import { currentUser, signOut } from '../utils/auth';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = { userName: currentUser ? currentUser.name : '' };

    this.handleSignOut = this.handleSignOut.bind(this);
  }

  handleSignOut() {
    signOut()
      .then(() => {
        this.setState({ userName: '' });

        this.props.history.push('/');
      })
      .catch(() =>
        alert('An error has occurred and we were unable to sign you out.')
      );
  }

  render() {
    const { userName } = this.state;

    return (
      <Navbar color="faded" light expand="md">
        <NavbarBrand tag={Link} to="/">
          Taste
        </NavbarBrand>

        <Nav className="ml-auto" navbar>
          {!userName && (
            <NavItem>
              <NavLink tag={Link} to="/signin">
                Sign In
              </NavLink>
            </NavItem>
          )}

          {userName && (
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                {userName}
              </DropdownToggle>

              <DropdownMenu right>
                <Link
                  className="dropdown-item"
                  tabIndex="0"
                  to={`/user/${currentUser.id}`}
                >
                  View profile
                </Link>

                <DropdownItem divider />

                <DropdownItem onClick={this.handleSignOut}>
                  Sign out
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          )}
        </Nav>
      </Navbar>
    );
  }
}

export default withRouter(NavBar);
