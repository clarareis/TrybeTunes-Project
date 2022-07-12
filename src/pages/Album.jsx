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
      albumCurrent: [],
      loading: true,
      favoriteMusics: [],
      load: false,
    };
  }

  componentDidMount() {
    this.getId();
    this.musicpush();
  }

  musicpush = async () => {
    this.setState({ favoriteMusics: await getFavoriteSongs() });
  }

  functionGetMusicsFavorites = async ({ target }) => {
    const { id } = target;
    const { albumCurrent } = this.state;
    const music = albumCurrent
      .find((element) => element.trackId === Number(id));
    this.setState({ load: true });
    await addSong(music);
    this.setState((prevState) => ({
      favoriteMusics: [...prevState.favoriteMusics, music],
    }));
    this.setState({ load: false });
  }

    getId = async () => {
      const { match } = this.props;
      const { params } = match;
      const { id } = params;
      const responseOfAlbum = await getMusics(id);

      this.setState({
        albumCurrent: responseOfAlbum,
        loading: false,
      });
    }

    render() {
      const { albumCurrent, loading, favoriteMusics, load } = this.state;
      return (
        <div data-testid="page-album">
          {loading ? (
            <Loading />
          ) : (
            <div>
              <p data-testid="artist-name">
                {albumCurrent[0].artistName}
              </p>
              <p data-testid="album-name">
                {albumCurrent[0].collectionName}
              </p>
              {load ? (
                <Loading />
              ) : (
                <div>
                  {albumCurrent.slice(1).map((music) => (
                    <MusicCard
                      musicId={ music.trackId }
                      key={ music.trackId }
                      track={ music.trackName }
                      preview={ music.previewUrl }
                      saveFavorites={ this.functionGetMusicsFavorites }
                      favoriteMusics={ favoriteMusics }
                    />
                  ))}
                </div>
              )}
            </div>
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
