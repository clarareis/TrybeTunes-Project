import React from 'react';
import { NavLink } from 'react-router-dom';
import Loading from '../pages/Loading';
import { getUser } from '../services/userAPI';
// import { getUser } from '../services/userAPI';
// import Loading from '../pages/Loading';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      loading: false,
    };
  }

  componentDidMount() {
    this.createUser();
  }

  createUser = async () => {
    this.setState({
      loading: true,
    });
    const xablau = await getUser();
    this.setState({
      userName: xablau.name,
      loading: false,
    });
  }

  render() {
    const {
      userName,
      loading,
    } = this.state;
    return (
      <header data-testid="header-component">
        { loading ? <Loading />
          : (
            <div>
              <span data-testid="header-user-name">
                { userName }
              </span>
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
            </div>
          ) }
      </header>
    );
  }
}

export default Header;
