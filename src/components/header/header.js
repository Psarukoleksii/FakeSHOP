import React from 'react'
import { NavLink} from "react-router-dom";
import './header.module.css'
import {useSelector} from "react-redux";

function Header() {
    const {wishList} = useSelector(({wishList: {wishList}}) => ({wishList}));
    return (

       <navbar>
            <span className={'logo'}><a href={'/'} className={'a'}>Main</a></span>
            <ul>
                <li><NavLink to={'/menu'} className={'a'}>Menu</NavLink></li>
                <li><NavLink to={'/basket'} className={'a'}>Basket</NavLink></li>
                <span>{wishList.length}</span>
                <li><NavLink to={'/aboutus'} className={'a'}>AboutUs</NavLink></li>
            </ul>
       </navbar>

    );
}

export default Header;
