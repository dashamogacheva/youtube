import {createBrowserRouter} from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import WatchVideoPage from "../pages/WatchVideoPage/WatchVideoPage";
import Channel from "../pages/Channel/Channel";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage/>
    },
    {
        path: 'video/:videoId',
        element: <WatchVideoPage/>
    },
    {
        path: 'channel/:channelId',
        element: <Channel/>
    }
]);