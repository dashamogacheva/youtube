import styles from './WatchVideoPage.module.css';
import {Link} from "react-router-dom";

export default function WatchVideoPage() {
    return (
        <div className={styles.watchPage}>
            <div>
                OOoops! WatchVideo
            </div>
            <Link to="/">
                <button>Nazad</button>
            </Link>
        </div>
    );
}