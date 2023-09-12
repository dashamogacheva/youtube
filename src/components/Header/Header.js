import styles from './Header.module.css';
import classNames from "classnames";
import menu from "../../icons/menu-burger.svg";
import notification from '../../icons/notification.svg';
import videoCreate from '../../icons/videoCreate.svg';
import avatar from '../../icons/avatar.svg';
import logo from '../../icons/youtube-logo.svg';
import search from '../../icons/search.svg';

const searchFormButtonClasses = classNames(styles.button, styles.searchButton);
const userBarButtonClasses = classNames(styles.button, styles.userBarButton);
const userBarAvatarClasses = classNames(styles.button, styles.userBarButton, styles.avatar);

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.menu}>
                <img className={styles.button} src={menu} alt='menu'/>
                <img className={styles.logo} src={logo} alt='logo'/>
            </div>
            <form className={styles.searchForm}>
                <input className={styles.inputSearch} type="text" placeholder='Введите запрос'/>
                <img className={searchFormButtonClasses}
                     src={search} alt='search'/>
            </form>
            <div className={styles.userBar}>
                <img className={userBarButtonClasses}
                     src={videoCreate} alt='videoCreate'/>
                <img className={styles.button}
                     src={notification} alt='notification'/>
                <img className={userBarAvatarClasses}
                     src={avatar} alt='avatar'/>
            </div>
        </div>
    );
}