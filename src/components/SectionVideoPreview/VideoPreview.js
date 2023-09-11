// import {useEffect, useState} from "react";
// import {getVideoDetails} from "../../utils/fetchLogic";

import {Link} from "react-router-dom";
import avatar from "../../icons/avatar.svg";

export default function VideoPreview(/*{currentVideo: {videoId}}*/) {

    // const [video, setVideo] = useState([]);
    //
    // useEffect(() => {
    //     async function startFetching() {
    //         const videoDetails = await getVideoDetails(videoId);
    //         setVideo(videoDetails);
    //     }
    //     startFetching();
    // })

    const videoId = 1;
    const channelId = 2;

    return (
        <div className='Video-preview'>
            <div className='preview'>

            </div>
            <div className='Description-board'>
                <Link to={`channel/${channelId}`} style={{ textDecoration: 'none' }}>
                    <img className='header-button User-bar-button avatar' src={avatar} alt='avatar'/>
                </Link>
                <div className='Description'>
                    <Link to={`video/${videoId}`} style={{ textDecoration: 'none' }}>
                        <span className='video-title'>
                        Название видео
                        </span>
                    </Link>
                    <Link to={`channel/${channelId}`} style={{ textDecoration: 'none' }}>
                        <span className='channel-title'>
                        Автор видео
                        </span>
                    </Link>
                    <span className='video-statistic'>
                        264 просмотра - 3 года назад
                    </span>
                </div>
            </div>
        </div>
    );
}