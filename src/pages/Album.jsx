import PropTypes from 'prop-types';
import React from 'react';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import { addSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import getMusics from '../services/musicsAPI';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      musics: [],
      loading: true,
      favoriteMusics: [],
      carregando: false,
    };
  }

  componentDidMount() {
    this.getId();
    this.putMusic();
  }

    putMusic = async () => {
      this.setState({ favoriteMusics: await getFavoriteSongs() });
    }

    saveFavorites = async (event) => {
      const { musics } = this.state;
      const song = musics.find((music) => music.trackId === Number(event.target.id));
      this.setState({ carregando: true });
      await addSong(song);
      this.setState((prevState) => ({
        favoriteMusics: [...prevState.favoriteMusics, song],
      }));
      this.setState({ carregando: false });
    }

    getId = async () => {
      const { match } = this.props;
      const { params } = match;
      const { id } = params;
      const album = await getMusics(id);

      this.setState({
        musics: album,
        loading: false,
      });
    }

    render() {
      const { musics, loading, favoriteMusics, carregando } = this.state;
      return (
        <div data-testid="page-album">
          {loading ? (
            <Loading />
          ) : (
            <>
              <p data-testid="artist-name">
                {musics[0].artistName}
              </p>

              <p data-testid="album-name">
                {musics[0].collectionName}
              </p>
              {carregando ? (
                <Loading />
              ) : (
                <>
                  {musics.slice(1).map((music) => (
                    <MusicCard
                      musicId={ music.trackId }
                      key={ music.trackId }
                      track={ music.trackName }
                      preview={ music.previewUrl }
                      saveFavorites={ this.saveFavorites }
                      favoriteMusics={ favoriteMusics }
                    />
                  ))}
                </>
              )}
            </>
          )}
        </div>
      );
    }
}
Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,

};

export default Album;
