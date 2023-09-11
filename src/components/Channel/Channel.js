import {Link} from 'react-router-dom';
import SidePanel from "../SidePanel/SidePanel";

export default function Channel() {
    return (
        <>
            <SidePanel/>
            <div className='channel-page'>
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