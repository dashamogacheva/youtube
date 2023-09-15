import styles from './Channel.module.css';
import {Link} from 'react-router-dom';
import SidePanel from "../../components/SidePanel/SidePanel";
import ChannelHeader from "../../components/ChannelHeader/ChannelHeader";
import ChannelTabs from "../../components/ChannelTabs/ChannelTabs";
import MainTabChannel from "../../components/MainTabChannel/MainTabChannel";


export default function Channel() {
    return (
        <>
            <SidePanel/>
            <div className={styles.channelPage}>
                <div className={styles.banner}>
                    channel banner
                </div>
                <div className={styles.channelContainer}>
                    <ChannelHeader/>
                    <ChannelTabs/>
                    <MainTabChannel/>
                </div>
                <Link to="/">
                    <button>Nazad</button>
                </Link>
            </div>
        </>
    );
}