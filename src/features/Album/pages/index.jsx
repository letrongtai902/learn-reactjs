import React from 'react';
import AlbumList from '../components/AlbumList';

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Nhạc giáng sinh bất hủ',
            thumnail: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/7/8/8/7/7887d36021a3c4ed1af4d0715a825946.jpg'
        },
        {
            id: 2,
            name: 'Nhạc Pop cho ngày giáng sinh',
            thumnail: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/e/d/8/f/ed8fd16d327aa4acdf222c25ece3a109.jpg'
        },
        {
            id: 3,
            name: 'Nhạc cùng nhau đón giáng sinh',
            thumnail: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/e/d/8/f/ed8fd16d327aa4acdf222c25ece3a109.jpg'
        },
    ]
    return (
        <div>
            <h3>Album Giáng Sinh</h3>
            <AlbumList albumList={albumList}></AlbumList>
        </div>
    );
}

export default AlbumFeature;