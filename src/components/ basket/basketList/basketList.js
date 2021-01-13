import {BasketItem} from "../basketItem/basketItem";
import React, {useState} from "react";

export const BasketList = ({numb, handChange, deleteProd}) =>{

    let sumNumb = numb.map((value)=>{
        return value.price
    })
    let setSum = sumNumb.reduce((acc, el)=> ( acc += el), 0)



    return (
        <div >
        { numb.map(value => {
                    return (
                        <BasketItem key={value.id} value={value} handChange={handChange} deleteProd={deleteProd} />
                    )
                }
            )
        }
        Сумма замовлення:{setSum.toFixed(2)}
        </div>
    )
}