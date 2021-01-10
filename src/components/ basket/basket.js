import Forms from "./forms/forms";
import {useSelector} from "react-redux";
import {useState} from "react";

function Basket() {

    const {wishList} = useSelector(({wishList: {wishList}}) => ({wishList}));
    const [counter, setCounter] = useState(0)
    // const arr = wishList.map(value => value.price);
    // const dispatch = useDispatch();


    const [numb, setNumb] = useState([...wishList]);

    const handChange = (e) => {
        if (e.target.value <= 5 && e.target.value >= 1) {
            let a = null;
            for (let i = 0; i < numb.length; i++) {
                if (numb[i].id === +e.target.id) {
                    a = i;
                }
            }
            const [filter] = wishList.filter((value) => value.id === +e.target.id);
            console.log(wishList)
            console.log(filter)
            const asd1 = filter.price * +e.target.value;
            let xxx = {...filter, price: asd1}
            numb.splice(a, 1, xxx);
            setNumb(numb);
            console.log(numb)
            // const [filter] = wishList.filter((value) => value.id === +e.target.id);
            // const asd1 = filter.price * +e.target.value;
            // let xxx = {...filter, price: asd1}
            // wishList.splice(a, 1, xxx)
            // console.log(wishList)
        }
    }
    console.log(numb)

    return (
        <div>

            {
                numb.map(value => {
                        return (
                            <div>
                                <h2>{value.title} - {value.price} </h2>
                                <form>
                                    <input type="number" defaultValue={1} onInput={handChange} id={value.id}/>
                                </form>
                            </div>
                        )
                    }
                )
            }
            Сумма замовлення:{counter}
            <h1>Basket</h1>
            <Forms/>
        </div>
    );
}

export default Basket;
