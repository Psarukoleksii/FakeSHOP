import React from "react";
import '../basket.css'
export const CatchEmpty = ({position}) =>{
    const show = position === true ? null :  (
        <div className={'containerEmpty'}>
        <div className={'emptyBasket'}></div>
        <div className={'emptyText'}>Not products</div>
        </div>
    )
    return show
}