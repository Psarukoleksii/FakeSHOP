import Forms from "./forms/forms";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

function Basket() {

    const {wishList} = useSelector(({wishList: {wishList}}) => ({wishList}));
    const [counter, setCounter] = useState(0)

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
            let numbCopy = [...numb];
            numbCopy.splice(a, 1, xxx);
            setNumb(numbCopy);
        }
    }


    let sumNumb = numb.map((value) => {
        return value.price
    })

    let setSum = sumNumb.reduce((acc, el) => (acc += el), 0)


    return (
        <div>
            {
                numb.map(value => {
                        return (
                            <div>
                                <h2>{value.title} - {value.price} </h2>
                                <form>
                                    <input type="number" defaultValue={1} onChange={handChange} id={value.id}/>
                                </form>
                            </div>
                        )
                    }
                )
            }
            Сумма замовлення:{setSum.toFixed(2)}
            <h1>Basket</h1>
            <Forms/>
        </div>
    );
}

export default Basket;
