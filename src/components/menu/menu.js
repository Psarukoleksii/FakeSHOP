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
        button: true,
    })
    const dispatch = useDispatch();
    const fetchData = useCallback(async () => {
        const productsServ = await productService.getProducts();
        setState(({loading, error, button}) => {
            return {loading: false, error: false, button: true}
        })
        dispatch(getProducts(productsServ));
    }, [dispatch]);

    useEffect(() => {
        fetchData()
    }, []);

    const icoLoading = state.loading ? <Loading/> : null;
    const errorIndication = state.error ? <Error/> : null;
    const menuList = !state.error && !state.loading ? <MenuList products={products}/> : null;


    return (
        <div>
            {icoLoading}
            {errorIndication}
            {menuList}
        </div>
    );
}

export default Menu;
