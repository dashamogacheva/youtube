import styles from './SidePanel.module.css';
import home from "../../icons/home.svg";
import subscriptions from "../../icons/subscribe.svg";
import library from "../../icons/library.svg";

export default function SidePanel() {
    return (
        <div className={styles.sidePanel}>
            <button className={styles.sidePanelButton}>
                <img className={styles.sidePanelButtonSvg} src={home} alt='home'/>
                <p className={styles.sidePanelButtonText}>Главная</p>
            </button>
            <button className={styles.sidePanelButton}>
                <img className={styles.sidePanelButtonSvg} src={subscriptions} alt='subscriptions'/>
                <p className={styles.sidePanelButtonText}>Подписки</p>
            </button>
            <button className={styles.sidePanelButton}>
                <img className={styles.sidePanelButtonSvg} src={library} alt='library'/>
                <p className={styles.sidePanelButtonText}>Библиотека</p>
            </button>
        </div>
    );
}