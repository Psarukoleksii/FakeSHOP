import { NavLink} from "react-router-dom";
import './header.module.css'

function Header() {
    return (

       <navbar>
            <span className={'logo'}><NavLink to={'/'} className={'a'}>Main</NavLink></span>
            <ul>
                <li><NavLink to={'/menu'} className={'a'}>Menu</NavLink></li>
                <li><NavLink to={'/basket'} className={'a'}>Basket</NavLink></li>
                <li><NavLink to={'/aboutus'} className={'a'}>AboutUs</NavLink></li>
            </ul>
       </navbar>

    );
}

export default Header;
