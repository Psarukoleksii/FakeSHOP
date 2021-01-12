import React, {useCallback, useMemo, useState} from 'react'
import {useDispatch} from "react-redux";
import {deleteProduct} from "../../../redux/actions-creator/actCreators";


export const BasketItem = ({value, handChange, deleteProd}) => {
    const dispatch = useDispatch()

    return (
        <div>
            <h2>{value.title} - {value.price}</h2>
            <form>
                <input type="number" defaultValue={1} max={5} min={1} onChange={handChange} id={value.id}/>
            </form>
            <button onClick={()=> deleteProd(value)}>Delete</button>
        </div>
    )
}
