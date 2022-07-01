import React from 'react';
import Login from '../pages/Login';

class buttonHome extends React.Component {
  constructor() {
    super();
    this.state = {
    //   inputPropName: '',
    //   buttonDisabled: true,
    };
  }

  onInputChange = ({ target }) => {
    const { name, type, value, checked } = target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    }, () => this.validateForm());
  }

  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

export default buttonHome;
