import React from "react";

export const ValidatorPhone = ({phone}) =>{

    const arrSplit = phone.split('')
    const good =  (arrSplit.length >= 9 && !!phone.match(/[0-10]/))? null : 'Not Correct'

    return (
        <span>{good}</span>

    )
}