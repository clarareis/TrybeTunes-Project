import React from 'react';
import { NavLink } from 'react-router-dom';
// import { getUser } from '../services/userAPI';
// import Loading from '../pages/Loading';

class Header extends React.Component {
  render() {
    return (
      <header data-testid="header-component">
        {/* <span data-testid="header-user-name" /> */}
        <nav>
          <NavLink
            to="/search"
            activeClassName="selected"
            data-testid="link-to-search"
          >
            Localizar
          </NavLink>
          <NavLink
            to="/favorites"
            activeClassName="selected"
            data-testid="link-to-favorites"
          >
            Favoritos
          </NavLink>
          <NavLink
            to="/profile"
            activeClassName="selected"
            data-testid="link-to-profile"
          >
            Perfil
          </NavLink>
        </nav>
      </header>
    );
  }
}

export default Header;
