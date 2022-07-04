import React from 'react';
import { createUser } from '../services/userAPI';

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
    this.setState({
      loading: true,
    });
    const { inputName,
    } = this.state;
    await createUser({ name: inputName });
    this.setState({
      loading: false,
    });
  }

  render() {
    const {
      inputName,
      buttonDisabled,
    } = this.state;
    return (
      <div data-testid="page-login">
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
