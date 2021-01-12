import React from 'react';
import './menuList.css';

import MenuItem from "../menuItem/menuItem";
import Slider from "../slider/slider";

export const MenuList = ({products, handAddProduct}) => {
    return(
        <div>
            <div className={'menuMainText'}>
                <h2>List of products FAKE SHOP</h2>
            </div>
            <div>
                    <Slider />
            </div>
            <div className={'imgLine'}>
                <img src="https://i.ibb.co/nRZfQsr/e3d855d56e4bdaa2c18514e383798e21-decora-ccedil-ati.jpg" alt=""/>
            </div>
            <div>
                {
                    products.map((product) => <MenuItem product={product} handAddProduct={handAddProduct}
                                                        key={product.id}/>)
                }
            </div>
        </div>
    )
}
