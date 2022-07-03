import React from 'react';

class Search extends React.Component {
  render() {
    return (
      <div data-testid="page-search">
        <form data-testid="search-artist-input">
          <button
            type="button"
            data-testid="search-artist-button"
            disabled="disabled"
            // desabilitar o botão quando tiver + de 2 caracteres em buscar o artista = 2 requisito
          >
            Pesquisar
          </button>
        </form>
        procurar
      </div>
    );
  }
}

export default Search;
