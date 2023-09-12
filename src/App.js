import './App.css';
import {RouterProvider} from 'react-router-dom';
import Header from "./components/Header/Header";
import {router} from "./utils/routing";


function App() {
    return (
        <div className="App">
            <Header/>
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
