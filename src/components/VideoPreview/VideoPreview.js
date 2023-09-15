// import {useEffect, useState} from "react";
// import {getVideoDetails} from "../../utils/fetchLogic";
import styles from './VideoPreview.module.css';
import classNames from "classnames";
import {Link} from "react-router-dom";
import avatar from "../../icons/avatar.svg";

const channelButtonAvatarClasses = classNames(styles.button, styles.userChannelButton, styles.avatar);

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
        <div className={styles.videoPreview}>
            <div className={styles.preview}>

            </div>
            <div className={styles.descriptionBoard}>
                <Link to={`channel/${channelId}`} style={{ textDecoration: 'none' }}>
                    <img className={channelButtonAvatarClasses} src={avatar} alt='avatar'/>
                </Link>
                <div className={styles.description}>
                    <Link to={`video/${videoId}`} style={{ textDecoration: 'none' }}>
                        <span className={styles.videoTitle}>
                        Название видео
                        </span>
                    </Link>
                    <Link to={`channel/${channelId}`} style={{ textDecoration: 'none' }}>
                        <span className={styles.channelTitle}>
                        Автор видео
                        </span>
                    </Link>
                    <span className={styles.videoStatistic}>
                        264 просмотра - 3 года назад
                    </span>
                </div>
            </div>
        </div>
    );
}