import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      inputPropName: '',
      buttonDisabled: true,
    };
  }

  /*       validateInputName = () => {
        const { inputPropName } = this.state;
        const inputPropNameLength = 3;
        if (inputPropName.length >inputPropNameLength ) {
          this.setState({ buttonDisabled: false });
        } else {
          this.setState({ buttonDisabled: true });
        }
      }; */

  onInputChange = ({ target }) => {
    const { name, value } = target;
    const inputNameLength = 3;
    if (value.length > inputNameLength) {
      this.setState({
        [name]: value,
        buttonDisabled: false,
      });
    }
  };

  render() {
    const {
      inputPropName,
      onInputChange,
      buttonDisabled,
      // buttonClick,
    } = this.state;
    return (
      <div data-testid="page-login">
        <form>
          <input
            data-testid="login-name-input"
            type="text"
            name="inputPropName"
            value={ inputPropName }
            onChange={ onInputChange }
          />
          <button
            data-testid="login-submit-button"
            type="submit"
            disabled={ buttonDisabled }
            // onClick={ buttonClick }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
