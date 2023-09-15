import styles from './MainTabChannel.module.css';
import play from '../../icons/play-svg.svg';
import ChannelVideoPreview from "../VideoPreview/ChannelVideoPreview";

export default function MainTabChannel() {
    return (
        <div className={styles.mainTabChannel}>
            <div className={styles.videos}>
                <div className={styles.titleVideos}>
                    <p className={styles.titleStyle}>Видео</p>
                    <button className={styles.playAllButton}>
                        <img className={styles.playIcon} src={play} alt="play icon"/>
                        Воспроизвести все
                    </button>
                </div>

                <div className={styles.allVideosList}>
                    <ChannelVideoPreview/>
                    <ChannelVideoPreview/>
                    <ChannelVideoPreview/>
                    <ChannelVideoPreview/>
                    <ChannelVideoPreview/>
                    <ChannelVideoPreview/>
                </div>

                <div className={styles.borderBottom}></div>
            </div>
            <div className={styles.videos}>
                <div className={styles.titleVideos}>
                    <p className={styles.titleStyle}>Популярные видео</p>
                    <button className={styles.playAllButton}>
                        <img className={styles.playIcon} src={play} alt="play icon"/>
                        Воспроизвести все
                    </button>
                </div>

                <div className={styles.allVideosList}>
                    <ChannelVideoPreview/>
                    <ChannelVideoPreview/>
                    <ChannelVideoPreview/>
                    <ChannelVideoPreview/>
                    <ChannelVideoPreview/>
                    <ChannelVideoPreview/>
                </div>

                <div className={styles.borderBottom}></div>
            </div>
        </div>
    );
}