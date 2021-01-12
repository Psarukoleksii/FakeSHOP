import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {addLocal, deleteProduct} from "../../redux/actions-creator/actCreators";
import {BasketList} from "./basketList/basketList";
import {CatchEmpty} from "./catchEmpty/catchEmpty";
import {ValidatorName} from "./Validators/ValidatorName";
import {ValidatorPhone} from "./Validators/ValidatorPhone";
import {ValidatorAddress} from "./Validators/ValidatorAddress";



const formOrder = {name: '', phone: '', address: '', position: false}


function Basket() {
    const dispatch = useDispatch()

    // wishlist,
    const {wishList} = useSelector(({wishList: {wishList}}) => ({wishList}));
    const [numb, setNumb] = useState([])
    useEffect(()=>{
        setNumb(wishList)
    },[wishList])

    // Choose count product
    const handChange = (e) => {
        let selectedItem = null;
        let numbCopy = [...numb];
        for (let i = 0; i < numb.length; i++) {
            if (numb[i].id === +e.target.id) {
                selectedItem = i;
                break;
            }
        }
            const [filter] = wishList.filter((value) => value.id === +e.target.id);
            const asd1 = filter.price * +e.target.value;
            let xxx = {...filter, price: asd1}
            numbCopy.splice(selectedItem, 1, xxx);
            setNumb(numbCopy);

        }

    //forms

    const [form, setForm] = useState({formOrder})
    const shareForms = (e) => {
        e.preventDefault()
        const InfoOrder = {...form, pizzas: numb}
        dispatch(addLocal(InfoOrder))
        setNumb([]);
        setForm({...formOrder, position: true})


    }
    // delete

    const deleteProd = (prod) => {
        dispatch(deleteProduct(prod))

    }







return (
        <div>
            <div>
            {   numb.length === 0  ?  <CatchEmpty position={form.position}/>: <BasketList numb={numb} handChange={handChange} deleteProd={deleteProd}/>}
            </div>
            <form onSubmit={shareForms} >
                <label>Name: <input onChange={ (e) =>{setForm({...form, name:e.target.value })}} type="text"  value={form.name}/>
                    {!!form.name && <ValidatorName name={form.name}/> }
                </label>
                <label>Phone number: <input onChange={(e)=> {setForm({...form, phone:e.target.value })}} type="tel" id={'phone'} value={form.phone}/>
                    {!!form.phone && <ValidatorPhone phone={form.phone}/> }
                </label>
                <label>Address: <input onChange={(e)=> {setForm({...form, address:e.target.value })}} type="search" value={form.address}/>
                    {!!form.address && <ValidatorAddress address={form.address}/> }
                </label>
                <button disabled={!numb.length || !form.name || !form.phone || !form.address} >Save</button>
            </form>
            {form.position && <h1>Success</h1>}
        </div>
    );
}

export default Basket
