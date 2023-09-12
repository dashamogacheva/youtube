import styles from './Channel.module.css';
import {Link} from 'react-router-dom';
import SidePanel from "../../components/SidePanel/SidePanel";

export default function Channel() {
    return (
        <>
            <SidePanel/>
            <div className={styles.channelPage}>
                <div>
                    OOoops! Channel
                </div>
                <Link to="/">
                    <button>Nazad</button>
                </Link>
            </div>
        </>

    );
}