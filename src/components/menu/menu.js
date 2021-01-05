import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect} from "react";
import {productService} from "../../service/products-service";
import {getProducts} from "../../redux/actions-creator/actCreators";

function Menu() {

    const {products} = useSelector(({products: {products}}) => ({products}))
    const dispatch = useDispatch();
    const fetchData = useCallback(async () => {
          const products = await productService.getProducts();

          dispatch(getProducts(products));
        }, [dispatch]);

    useEffect(() => {
        fetchData()
    },  []);


    return (
        <div>
        {products.map((product)=>{
            return (
                <div key={product.id}>
                    <h2>{product.id}</h2>
                    <p>{product.title}</p>
                    <button>Save</button>
                </div>
            )
            })}
        </div>
    );
}

export default Menu;
