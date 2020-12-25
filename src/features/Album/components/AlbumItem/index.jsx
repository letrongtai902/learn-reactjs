import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'

AlbumItem.propTypes = {
    album: PropTypes.object.isRequired
};

function AlbumItem({ album }) {
    return (
        <div className="album">
            <div className="album__thumnail">
                <img src={album.thumnail} alt={album.name}></img>
            </div>
            <p className="album__name">{album.name}</p>
        </div>
    );
}

export default AlbumItem;