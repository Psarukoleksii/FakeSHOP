import React from 'react';
import './successOrder.css'
import {phone1, phone2} from "../../../config/config";

export const SuccessOrder = () => {

    let order = JSON.parse(localStorage.getItem('InfoOrder'));

    return (
        <div className={'statusOrder'}>
            <div className={'statusOrderSection'}>
                <h2>{order.name}, your order is <span>complete!</span></h2>
                <p>Your address: {order.address}</p>
                {order.pizzas.map(value => <p>{value.category} - {value.title}</p>)}
            </div>
            <div className={'orderWarning'}>
                <p>
                    If there is an error in the order, call immediately at: <br /> <span>{phone1}</span> <br />  or <br /> <span>{phone2}</span>
                </p>
            </div>
        </div>
    )
}
