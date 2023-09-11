import VideoPreview from "./VideoPreview";
// import {useState, useEffect} from 'react';
// import {getVideoPlaylist} from "../../utils/fetchLogic";

export default function SectionVideoPreview() {
    // const [videoArray, setVideoArray] = useState([]);
    //
    // if (!videoArray?.length) {
    //     return (
    //         <span>
    //             Oops, nothing found!
    //         </span>
    //     );
    // }

    return (
        <div className='SectionVideoPreview'>
            {/*{videoArray.map((video) => (<VideoPreview currentVideo={video.video} key={video.video.videoId}/>))}*/}
            <VideoPreview/>
            <VideoPreview/>
            <VideoPreview/>
            <VideoPreview/>
            <VideoPreview/>
            <VideoPreview/>
            <VideoPreview/>
            <VideoPreview/>
            <VideoPreview/>
            <VideoPreview/>
            <VideoPreview/>
            <VideoPreview/>
            <VideoPreview/>
            <VideoPreview/>
            <VideoPreview/>
            <VideoPreview/>
            <VideoPreview/>
            <VideoPreview/>
            <VideoPreview/>
            <VideoPreview/>
        </div>
    );
}