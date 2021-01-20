import {BasketItem} from "../basketItem/basketItem";
import React from "react";
import './basketList.css'

export const BasketList = ({numb, handChange, deleteProd}) =>{

    let sumNumb = numb.map((value)=>{
        return value.price
    })
    let setSum = sumNumb.reduce((acc, el)=> ( acc += el), 0)

    return (
        <div className={'sectionListProduct'}>
        { numb.map(value => {
                    return (
                        <BasketItem key={value.id} value={value} handChange={handChange} deleteProd={deleteProd} />
                    )
                }
            )
        }
        <span>Sum order: {setSum.toFixed(2)} $</span>
        </div>
    )
}
