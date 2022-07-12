import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class MusicCard extends Component {
  render() {
    const { track, preview, musicId, saveFavorites, favoriteMusics } = this.props;
    return (
      <div>
        <p>{track}</p>
        <audio data-testid="audio-component" src={ preview } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
        </audio>
        <label htmlFor={ musicId }>
          <input
            data-testid={ `checkbox-music-${musicId}` }
            id={ musicId }
            type="checkbox"
            onChange={ saveFavorites }
            checked={ favoriteMusics.some((elemento) => elemento.trackId === musicId) }
          />
        </label>
      </div>
    );
  }
}
MusicCard.propTypes = {
  track: PropTypes.string,
  preview: PropTypes.string,
}.isRequired;
