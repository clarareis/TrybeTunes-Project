import PropTypes from 'prop-types';
import React from 'react';

class NotFound extends React.Component {
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

NotFound.propTypes = {
  history: PropTypes.node.isRequired,
};

export default NotFound;
