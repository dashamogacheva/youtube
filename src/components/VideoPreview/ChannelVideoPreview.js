import styles from './ChannelVideoPreview.module.css';
// import {Link} from "react-router-dom";

export default function ChannelVideoPreview() {
    // const videoId = 1;
    return (
        <div className={styles.channelVideoPreview}>
            {/*<Link to={`video/${videoId}`} style={{textDecoration: 'none'}}>*/}
                <div className={styles.preview}>

                </div>
                <div className={styles.description}>
                    <span className={styles.videoTitle}>
                        Название видео
                    </span>
                    <span className={styles.videoStatistic}>
                        264 просмотра - 3 года назад
                    </span>
                </div>
            {/*</Link>*/}
        </div>
    );
}