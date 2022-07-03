/* eslint-disable react/prop-types */
import React from 'react';

export default class NotFound extends React.Component {
  back = () => {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    return (
      <div data-testid="page-not-found">
        <h1>Página não encontrada!</h1>
        <button
          type="button"
          onClick={ this.back }
        >
          Back
        </button>
      </div>
    );
  }
}
