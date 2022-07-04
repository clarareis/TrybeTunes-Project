import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      inputNameSearch: '',
      buttonDisabled: true,
    };
  }

  validateInputName = () => {
    const { inputNameSearch } = this.state;
    const inputPropNameLength = 2;
    if (inputNameSearch.length >= inputPropNameLength) {
      this.setState({ buttonDisabled: false });
    } else {
      this.setState({ buttonDisabled: true });
    }
  };

  onInputChange = ({ target }) => {
    const { value } = target;
    this.setState({
      inputNameSearch: value,
    }, () => this.validateInputName());
  };

  render() {
    const {
      inputNameSearch,
      buttonDisabled,
    } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <form>
          <input
            type="text"
            data-testid="search-artist-input"
            name="inputNameSearch"
            value={ inputNameSearch }
            onChange={ this.onInputChange }
          />
          <button
            data-testid="search-artist-button"
            type="submit"
            disabled={ buttonDisabled }
            // onClick={ this.validateInputName }
          >
            Pesquisar
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
