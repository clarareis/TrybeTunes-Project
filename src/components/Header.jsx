import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <section>
        <nav data-testid="header-component">
          <NavLink to="/" activeClassName="selected" exact>Login</NavLink>
          <NavLink
            to="/search"
            activeClassName="selected"
            data-testid="link-to-search"
          >
            Search
          </NavLink>
          <NavLink to="/album/" activeClassName="selected">Album</NavLink>
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
          <NavLink to="/profile/edit" activeClassName="selected">Editar Perfil</NavLink>
        </nav>
      </section>
    );
  }
}

export default Header;
