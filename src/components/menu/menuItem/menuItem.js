import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addProduct} from "../../../redux/actions-creator/actCreators";
import './menuItem.css';


const MenuItem = ({product}) => {

    const [state, setState] = useState({button: true})

    const dispatch = useDispatch();

    const handAddProduct = (product) => {
        dispatch(addProduct(product));
        setState({...state, button: false})
    }

    return (
        <div key={product.id} className={'productItem'}>
            <div className={'holder'}>
                <img src={product.image} alt=""/>
                <div className={'block'}>
                    <p>{product.description}</p>
                </div>
            </div>
            <div className={'aboutProduct'}>
                <p>{product.title}</p>
                <p>{product.price} $</p>
                {state.button ? <button onClick={() => handAddProduct(product)} id={product.id}>Add to basket</button> :
                    <li><NavLink to={'/basket'} className={'a'}>To Basket</NavLink></li>}
            </div>
        </div>
    )
}

export default MenuItem;
