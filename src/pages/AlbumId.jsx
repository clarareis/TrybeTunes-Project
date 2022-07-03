/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

export default class AlbumId extends React.Component {
  render() {
    const { id } = this.props.match.params;
    return (
      <div data-testid="page-album">
        album id
        { id }
      </div>
    );
  }
}
