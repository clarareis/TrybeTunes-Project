import PropTypes from 'prop-types';
import React from 'react';

class AlbumId extends React.Component {
  render() {
    const { match } = this.props;
    const { id } = match.params;
    return (
      <div data-testid="page-album">
        album id
        { id }
      </div>
    );
  }
}

AlbumId.propTypes = {
  match: PropTypes.node.isRequired,
};

export default AlbumId;
