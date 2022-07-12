import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      inputName: '',
      saveName: '',
      buttonDisable: true,
      todosAlbuns: [],
      loading: false,
    };
  }

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ inputName: value }, () => this.validation());
  }

  validation = () => {
    const min = 2;
    const { inputName } = this.state;
    if (inputName.length >= min) {
      this.setState({ buttonDisable: false });
    } else {
      this.setState({ buttonDisable: true });
    }
  };

  onClick = async (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const { inputName } = this.state;
    const respostaApi = await searchAlbumsAPI(inputName);
    this.setState({
      inputName: '',
      todosAlbuns: respostaApi,
      saveName: inputName,
    }, () => {
      this.setState({ loading: false });
    });
  }

  renderArtists = () => {
    const { todosAlbuns } = this.state;
    if (todosAlbuns.length !== 0) {
      return (
        todosAlbuns
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
    } return <span>Nenhum álbum foi encontrado</span>;
  }

  render() {
    const { inputName, buttonDisable, loading, saveName, todosAlbuns } = this.state;
    return (
      <div data-testid="page-search">

        {loading ? <Loading />
          : (
            <div>
              <form>
                Nome do Artista
                <input
                  type="text"
                  name="inputName"
                  value={ inputName }
                  onChange={ this.handleChange }
                  data-testid="search-artist-input"
                />
                <button
                  type="submit"
                  name="username"
                  data-testid="search-artist-button"
                  disabled={ buttonDisable }
                  onClick={ this.onClick }
                >
                  Pesquisar
                </button>
              </form>
              {todosAlbuns.length > 0 && `Resultado de álbuns de: ${saveName}`}
              {this.renderArtists()}
            </div>
          )}
      </div>
    );
  }
}
export default Search;
