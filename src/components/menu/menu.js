import {useDispatch, useSelector} from "react-redux";
import React, {useCallback, useEffect, useState} from "react";
import {productService} from "../../service/products-service";
import {addProduct, getProducts} from "../../redux/actions-creator/actCreators";
import {Loading} from "../loading/loading";
import {Error} from "../error/error";
import {MenuList} from "./menuList/menuList";


function Menu() {
    const {products} = useSelector(({products: {products}}) => ({products}))

    const [state, setState] = useState({
        loading: true,
        error: false,
    })
    const dispatch = useDispatch();
    const fetchData = useCallback(async () => {
        const productsServ = await productService.getProducts()
        if(productsServ === null){
            return onError()
        } else {
            setState(({loading, error}) => {
                return {loading: false, error: false}
            })
            dispatch(getProducts(productsServ));
        }
    }, [dispatch]);

    console.log(state)
    const onError = (err) =>{
        console.log(err);
        setState((loading, error)=>{
            return {loading: false, error: true}
        })
    }

    useEffect(() => {
        fetchData()
    }, []);

    const icoLoading = state.loading ? <Loading/> : null;
    const menuList = !state.error && !state.loading ? <MenuList products={products}/> : null;
    const errorIndication = state.error ? <Error /> : null;


    return (
        <div>
            {icoLoading}
            {errorIndication}
            {menuList}
        </div>
    );
}

export default Menu;
