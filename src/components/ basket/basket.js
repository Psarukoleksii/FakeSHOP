import Forms from "./forms/forms";
import {useSelector} from "react-redux";

function Basket() {

    const {wishList} = useSelector(({wishList: {wishList}}) => ({wishList}))
    console.log(wishList)
    return (
        <div>
            {
                wishList.map(value=> <h2>{value.title}</h2>)
            }
        <h1>Basket</h1>
        <Forms />
        </div>
    );
}

export default Basket;
