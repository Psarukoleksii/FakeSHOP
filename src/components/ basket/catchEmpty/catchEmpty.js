import React from "react";
import './catchEmpty.css';
import {NavLink} from "react-router-dom";


export const CatchEmpty = ({position}) =>{
    const show = position === true ? null :  (
        // <div className={'containerEmpty'}>
        // <div className={'emptyText'}>Not products</div>
        // </div>
        <div className={'containerEmpty'}>
            <img src="https://icons-for-free.com/iconfiles/png/512/basket+buy+cart+internet+online+shopping+icon-1320085878582343273.png" alt="basket"/>
            <h2>Not prodcts</h2>
            <p>Choose products from <NavLink to={'/menu'} className={'a'}>menu</NavLink></p>
        </div>
    )
    return show
}
