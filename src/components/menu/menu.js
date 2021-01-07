import {useDispatch, useSelector} from "react-redux";
import React, {useCallback, useEffect, useState} from "react";
import {productService} from "../../service/products-service";
import {getProducts} from "../../redux/actions-creator/actCreators";
import Slider from "./slider/slider";


function Menu() {
    const {products} = useSelector(({products: {products}}) => ({products}))
    const [count, setCount] = useState({count: 0, disabled: false});
    const dispatch = useDispatch();
    const fetchData = useCallback(async () => {
          const productsServ = await productService.getProducts();
          setCount({count: productsServ.length * 0.5, disabled: false})
          dispatch(getProducts(productsServ));
        }, [dispatch]);

    useEffect(() => {
        fetchData()
    },  []);

    console.log(count)
    return (
        <div>
        <Slider />
        <div>

        {products.map((product) => {
            if (product.id <= count.count) {
                return (
                    <div key={product.id}>
                        <h2>{product.id}</h2>
                        <p>{product.title}</p>
                        <button>Save</button>
                    </div>
                )
            }
        })
        }
            {!count.disabled && <button style={{background: 'red', borderRadius: '5px', padding: '10px 20px', margin: '20px' }} onClick={()=>{setCount({count:products.length, disabled: true})}}>All</button>}
        </div>
        </div>
    );
}

export default Menu;
