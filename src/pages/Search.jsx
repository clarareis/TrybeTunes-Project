import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      inputName: '',
      saveArtistName: '',
      buttonDisable: true,
      allAlbunsRecive: [],
      loading: false,
    };
  }

  handleInputChange = ({ target }) => {
    const { value } = target;
    this.setState({ inputName: value }, () => this.inputValidation());
  }

  inputValidation = () => {
    const inputPropNameLength = 2;
    const { inputName } = this.state;
    if (inputName.length >= inputPropNameLength) {
      this.setState({ buttonDisable: false });
    } else {
      this.setState({ buttonDisable: true });
    }
  };

  buttonClick = async (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const { inputName } = this.state;
    const responseApi = await searchAlbumsAPI(inputName);
    this.setState({
      inputName: '',
      allAlbunsRecive: responseApi,
      saveArtistName: inputName,
    }, () => {
      this.setState({ loading: false });
    });
  }

  getAlbuns = () => {
    const { allAlbunsRecive } = this.state;
    if (allAlbunsRecive.length !== 0) {
      return (
        allAlbunsRecive
          .map(({ collectionId, artistName, artworkUrl100, collectionName }) => (
            <div key={ collectionId }>
              <Link
                to={ `/album/${collectionId}` }
                data-testid={ `link-to-album-${collectionId}` }
              >

                <img src={ artworkUrl100 } alt={ collectionName } />
                <p>{ collectionName}</p>
                <p>{artistName}</p>
              </Link>
            </div>
          ))
      );
    } return <p>Nenhum álbum foi encontrado</p>;
  }

  render() {
    const { inputName,
      buttonDisable,
      loading,
      saveArtistName,
      allAlbunsRecive } = this.state;
    return (
      <div data-testid="page-search">

        {loading ? <Loading />
          : (
            <div>
              <form>
                <input
                  type="text"
                  name="inputName"
                  value={ inputName }
                  onChange={ this.handleInputChange }
                  placeholder="Nome do artista"
                  data-testid="search-artist-input"
                />
                <button
                  type="submit"
                  name="username"
                  data-testid="search-artist-button"
                  disabled={ buttonDisable }
                  onClick={ this.buttonClick }
                >
                  Pesquisar
                </button>
              </form>
              {allAlbunsRecive.length > 0 && `Resultado de álbuns de: ${saveArtistName}`}
              {this.getAlbuns()}
            </div>
          )}
      </div>
    );
  }
}
export default Search;
