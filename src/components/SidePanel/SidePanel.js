import home from "../../icons/home.svg";
import subscriptions from "../../icons/subscribe.svg";
import library from "../../icons/library.svg";

export default function SidePanel() {
    return (
        <div className='side-panel'>
            <button className='side-panel-button'>
                <img className='side-panel-button-svg' src={home} alt='home'/>
                <p className='side-panel-button-text'>Главная</p>
            </button>
            <button className='side-panel-button'>
                <img className='side-panel-button-svg' src={subscriptions} alt='subscriptions'/>
                <p className='side-panel-button-text'>Подписки</p>
            </button>
            <button className='side-panel-button'>
                <img className='side-panel-button-svg' src={library} alt='library'/>
                <p className='side-panel-button-text'>Библиотека</p>
            </button>
        </div>
    );
}