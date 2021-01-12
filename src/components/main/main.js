import {NavLink} from "react-router-dom";
import './main.css';

function Main() {
    return (
        <div>
            <div className={'mainSectionTop'}>
                <h1>Welcome to FAKE SHOP</h1>
            </div>
            <div className={'mainSectionCenter'}>
                <div className={'mainSectionCenterItem'}>
                    <h2>Choose your order!</h2>
                    <button><NavLink to={'/menu'}>Menu</NavLink></button>
                </div>

            </div>
        </div>
    )
}

export default Main;
