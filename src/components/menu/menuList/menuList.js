import React, {useEffect, useState} from 'react';
import './menuList.css';
import MenuItem from "../menuItem/menuItem";
import Slider from "../slider/slider";
import {MenuFilter} from "../menuFilter/menuFilter";
import {filterCategory} from "./filterCategory";
import {Sort} from "./sortComponents";
import {MenuSorting} from "./MenuSorting/MenuSorting";

export const MenuList = ({products, handAddProduct}) => {
    // Main State
    const [state, setState] = useState([])
    useEffect(() => {
        setState([...products])
    }, [products])

    // FilterValue
    const [filterValue, setFilterValue] = useState('all')
    // SortValue
    const [sort, setSort] = useState('notSort')

    // Filter and Enter Category
    const category = filterCategory(products)

    // func Filter
    const handFilterProduct = ({atribut}) => {
        let filterArr = products.filter((value) => value.category === atribut);
        setFilterValue(atribut)
        const sortFilter = Sort(sort, filterArr)
        setState(sortFilter)
    }
    const handAllProduct = () =>{
        setFilterValue('all')
        let AllProduct = [...products];
        const sortAll = Sort(sort, AllProduct)
        setState(sortAll)
    }

    // Func Sort
    const SortProduct = (e) => {
        setSort(e.target.value)
        const arr = Sort(e.target.value, [...state])
        setState(arr)
    }
    const NotSort = (e) => {
        setSort(e)
        if(filterValue === 'all'){
            setState([...products])
        }else{
            let filterArr = products.filter((value) => value.category === filterValue);
            setState(filterArr)
        }
    }

    return (
        <div>
            {/*Slider && h2*/}
            <div className={'menuMainText'}>
                <h2>List of products FAKE SHOP</h2>
            </div>
            <div>
                <Slider/>
            </div>
            <div className={'imgLine'}>
                <img src="https://i.ibb.co/nRZfQsr/e3d855d56e4bdaa2c18514e383798e21-decora-ccedil-ati.jpg" alt=""/>
            </div>

            {/*Filter && Sort*/}
            <div className={'containerMenuFilterAndSorting'}>
                <div className={'MenuFilterMain'}>
                    <h2>Filter of products:</h2>
                    <div className={'containerMenuFilter'}>
                    <div className={'inputFromFilter'}>
                    <input type="radio" name={'inputFilter'} value={'all'} id={'notFilter'} onChange={handAllProduct}/>
                    <label htmlFor={'notFilter'}>All product</label>
                    </div>
                    {
                        category.map(value => <MenuFilter atribut={value} handFilterProduct={handFilterProduct}/>)
                    }
                    </div>
                </div>
                <MenuSorting NotSort={NotSort} SortProduct={SortProduct}/>
            </div>

            {/*stateMAP*/}
            <div>
                {
                    state.map((product) => <MenuItem product={product} handAddProduct={handAddProduct}
                                                     key={product.id}/>)
                }
            </div>
        </div>
    )
}
