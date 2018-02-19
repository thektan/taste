import React, { Component } from 'react';
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

import { signOut } from '../utils/auth';
import { ROUTES } from '../utils/routes';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.handleSignOut = this.handleSignOut.bind(this);
  }

  handleSignOut() {
    signOut()
      .then(() => {
        window.location = ROUTES.HOME; // Just refresh the whole page instead of using react-router.
      })
      .catch(() =>
        alert('An error has occurred and we were unable to sign you out.')
      );
  }

  render() {
    const { currentUser } = this.props;

    return (
      <Navbar color="faded" light expand="md">
        <NavbarBrand tag={Link} to="/">
          Taste
        </NavbarBrand>

        <Nav className="ml-auto" navbar>
          {!currentUser && (
            <NavItem>
              <NavLink tag={Link} to="/signin">
                Sign In
              </NavLink>
            </NavItem>
          )}

          {currentUser && (
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                {currentUser.name}
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

export default NavBar;
