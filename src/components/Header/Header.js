import menu from "../../icons/menu-burger.svg";
import notification from '../../icons/notification.svg';
import videoCreate from '../../icons/videoCreate.svg';
import avatar from '../../icons/avatar.svg';
import logo from '../../icons/youtube-logo.svg';
import search from '../../icons/search.svg';

export default function Header() {
    return (
        <div className='App-header'>
            <div className='Menu-bar'>
                <img className='header-button' src={menu} alt='menu'/>
                <img className='logo' src={logo} alt='logo'/>
            </div>
            <form className='search-form'>
                <input className='input-search' type="text" placeholder='Введите запрос'/>
                <img className='header-button search-button' src={search} alt='search'/>
            </form>
            <div className='User-bar'>
                <img className='header-button User-bar-button' src={videoCreate} alt='videoCreate'/>
                <img className='header-button User-bar-button' src={notification} alt='notification'/>
                <img className='header-button User-bar-button avatar' src={avatar} alt='avatar'/>
            </div>
        </div>
    );
}