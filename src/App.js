import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import WatchVideo from './components/WatchVideo/WatchVideo';
import Channel from './components/Channel/Channel';
import Header from "./components/Header/Header";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage/>
    },
    {
        path: 'video/:videoId',
        element: <WatchVideo/>
    },
    {
        path: 'channel/:channelId',
        element: <Channel/>
    }
]);

function App() {
    return (
        <div className="App">
            <Header/>
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
