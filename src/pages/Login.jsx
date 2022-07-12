import React from 'react';
import { Redirect } from 'react-router';
import Loading from '../components/Loading';
import { createUser } from '../services/userAPI';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      inputName: '',
      buttonDisabled: true,
      loading: false,
      log: false,
    };
  }

  validateInputName = () => {
    const { inputName } = this.state;
    const inputPropNameLength = 3;
    if (inputName.length >= inputPropNameLength) {
      this.setState({ buttonDisabled: false });
    } else {
      this.setState({ buttonDisabled: true });
    }
  };

  onInputChange = ({ target }) => {
    const { value } = target;
    this.setState({
      inputName: value,
    }, () => this.validateInputName());
  };

    onSaveButtonClick = async () => {
      const { inputName: name,
      } = this.state;
      this.setState({ loading: true });
      await createUser(
        { name },
      );
      this.setState({
        loading: true,
        log: true,
      });
    }

    render() {
      const {
        inputName,
        buttonDisabled,
        loading,
        log,
      } = this.state;
      return (
        <div data-testid="page-login">
          { loading && <Loading /> }
          { log && <Redirect to="/search" /> }
          <form>
            <input
              data-testid="login-name-input"
              type="text"
              name="inputName"
              value={ inputName }
              placeholder="Coloque aqui o seu usuário"
              onChange={ this.onInputChange }
            />
            <button
              data-testid="login-submit-button"
              type="submit"
              disabled={ buttonDisabled }
              onClick={ this.onSaveButtonClick }
            >
              Entrar
            </button>
          </form>
        </div>
      );
    }
}

export default Login;
