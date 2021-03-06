import React from 'react';

const VideoListItem = ( { video, onVideoSelect } ) => {

    var imageSrc = video.snippet.thumbnails.default.url;
    var title = video.snippet.channelTitle;

    return (
        <li onClick={ () => onVideoSelect( video ) } className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={ imageSrc }/>
                </div>

                <div className="media-body">
                    <div className="media-heading">
                        { title }
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;