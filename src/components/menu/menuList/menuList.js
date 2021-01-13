import React, {useEffect, useState} from 'react';
import './menuList.css';
import MenuItem from "../menuItem/menuItem";
import Slider from "../slider/slider";
import {MenuFilter} from "../menuFilter/menuFilter";

export const MenuList = ({products, handAddProduct}) => {

    const [state, setState] = useState([])

    useEffect(() => {
        setState([...products])
    }, [products])

    let arr = products.map(value => value.category)

    let result = [];

    function unique(arr) {
        for (let str of arr) {
            if (!result.includes(str)) {
                result.push(str)
            }
        }
        return result;
    }
    unique(arr)

    const handFilterProduct = ({atribut}) => {
        let filterArr = products.filter((value) => value.category === atribut);
        setState(filterArr)
    }

    const handAllProduct = () =>{
        let asd = [...products];
        setState(asd)
    }


    return (
        <div>
            <div className={'menuMainText'}>
                <h2>List of products FAKE SHOP</h2>
            </div>
            <div>
                <Slider/>
            </div>
            <div className={'imgLine'}>
                <img src="https://i.ibb.co/nRZfQsr/e3d855d56e4bdaa2c18514e383798e21-decora-ccedil-ati.jpg" alt=""/>
            </div>
            <div>
                <h2>Filter of products:</h2>
                <input type="radio" name={'inputFilter'} value={'notFilter'} id={'notFilter'} onChange={handAllProduct}/>
                <label htmlFor={'notFilter'}>All product</label>
                {
                    result.map(value => <MenuFilter atribut={value} handFilterProduct={handFilterProduct}/>)
                }
            </div>
            <div>
                <h2>Sort of products:</h2>
                <input type="radio" name={'inputFilter'} value={'notFilter'} id={'notFilter'} onChange={handAllProduct}/>
                <label htmlFor={'notFilter'}>All product</label>

            </div>
            <div>
                {
                    state.map((product) => <MenuItem product={product} handAddProduct={handAddProduct}
                                                     key={product.id}/>)
                }
            </div>
        </div>
    )
}
