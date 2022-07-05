import React from 'react';
import { Redirect } from 'react-router';
import { createUser } from '../services/userAPI';
import Loading from './Loading';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      inputName: '',
      buttonDisabled: true,
      loading: false,
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

    onSaveButtonClick = async (event) => {
      event.preventDefault();
      const { inputName: name,
      } = this.state;
      this.setState({ loading: true });
      await createUser(
        { name },
      );
      this.setState({
        loading: true,
        logado: true,
      });
    }

    render() {
      const {
        inputName,
        buttonDisabled,
        loading,
        logado,
      } = this.state;
      return (
        <div data-testid="page-login">
          { loading && <Loading /> }
          { logado && <Redirect to="/search" /> }
          <form>
            <input
              data-testid="login-name-input"
              type="text"
              name="inputName"
              value={ inputName }
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
