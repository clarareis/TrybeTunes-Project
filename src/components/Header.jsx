import React from 'react';
import { NavLink } from 'react-router-dom';
// import { getUser } from '../services/userAPI';
// import Loading from '../pages/Loading';

class Header extends React.Component {
  render() {
    return (
      <header data-testid="header-component">
        <span data-testid="header-user-name" />
        <nav>
          <NavLink
            to="/"
            activeClassName="selected"
            exact
          >
            Login
          </NavLink>
          <NavLink
            to="/search"
            activeClassName="selected"
            data-testid="link-to-search"
          >
            Search
          </NavLink>
          <NavLink
            to="/album/:id"
            activeClassName="selected"
          >
            Albuns
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
            exact
            data-testid="link-to-profile"
          >
            Perfil
          </NavLink>
          <NavLink
            to="/profile/edit"
            activeClassName="selected"
          >
            Editar Perfil
          </NavLink>
        </nav>
      </header>
    );
  }
}

export default Header;
