import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <section>
        <h4> Menu</h4>
        <nav>
          <a href="/">Login</a>
          <a href="/search">Search</a>
          <a href="/album/:id">Album</a>
          <a href="/favorites">Favoritos</a>
          <a href="/profile">Perfil</a>
          <a href="/profile/edit">Editar Perfil</a>
          <a href="*">NotFound</a>
        </nav>
      </section>
    );
  }
}

export default Header;
