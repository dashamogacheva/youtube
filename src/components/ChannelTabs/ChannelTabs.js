import styles from "./ChannelTabs.module.css";

export default function ChannelTabs() {
    return (
        <>
            <div className={styles.channelTabs}>
                <button className={styles.tab}>
                    ГЛАВНАЯ
                </button>
                <button className={styles.tab}>
                    ВИДЕО
                </button>
                <button className={styles.tab}>
                    ПЛЕЙЛИСТЫ
                </button>
                <button className={styles.tab}>
                    СООБЩЕСТВО
                </button>
                <button className={styles.tab}>
                    КАНАЛЫ
                </button>
                <button className={styles.tab}>
                    О КАНАЛЕ
                </button>
            </div>
            <div className={styles.borderBottom}></div>
        </>
    );
}