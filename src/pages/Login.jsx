import PropTypes from 'prop-types';
import React from 'react';

class Login extends React.Component {
  render() {
    const {
      inputPropName,
      buttonDisabled,
      buttonClick,
    } = this.props;
    return (
      <div data-testid="page-login">
        <form>
          <input
            type="text"
            name="inputPropName"
            value={ inputPropName }
          />
          <button
            type="submit"
            disabled={ buttonDisabled }
            onClick={ buttonClick }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  inputPropName: PropTypes.string.isRequired,
  buttonDisabled: PropTypes.bool.isRequired,
  buttonClick: PropTypes.func.isRequired,
};

export default Login;
