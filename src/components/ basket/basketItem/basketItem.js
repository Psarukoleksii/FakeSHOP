import React from 'react'
import './basketItem.css';

export const BasketItem = ({value, handChange, deleteProd}) => {

    return (
        <div className={'basketListItem'}>
            <div className={'BasketListSection'}>
                <h2>{value.title} - {value.price} $</h2>
                <input type="number" defaultValue={1} max={5} min={1} onChange={handChange} id={value.id}/>
                <button onClick={() => deleteProd(value)}>Delete</button>
            </div>

        </div>
    )
}
