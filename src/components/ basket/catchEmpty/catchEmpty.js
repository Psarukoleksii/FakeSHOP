import React from "react";

export const CatchEmpty = ({position}) =>{
    const show = position === true ? null :  (<div><h1>Not products</h1></div>)
    return show
}