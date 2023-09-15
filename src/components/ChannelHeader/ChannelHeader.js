import styles from "./ChannelHeader.module.css";
import avatar from "../../icons/avatar.svg";

export default function ChannelHeader () {
    return (
        <div className={styles.channelHeader}>
            <div className={styles.channelСard}>
                <img className={styles.avatar} src={avatar} alt="channel avatar"/>
                <div className={styles.description}>
                    <div className={styles.channelName}>
                        Channel Name
                    </div>
                    <div className={styles.statistic}>
                        @ChannelName 1,07 млн подписчиков 458 видео
                    </div>
                    <p className={styles.statistic}>
                        ✨ Привет! Меня зовут Лена, мне 30 лет и я из Украины. <br/>
                        ✨ Разговариваю на 3х языках: русский, украинский и английский.
                    </p>
                </div>
            </div>
            <button className={styles.subscribe}>
                Subscribe
            </button>
        </div>
    );
}