import './forms.css'
import {useState} from "react";
const formOrder = {name: '', phone: '', address: ''}

const Forms = () =>{
    const [count, setCount] = useState(formOrder)
    const [disabled, setDisabled] = useState({disabled: false})
    const shareForms = (e) => {
        setDisabled({disabled: true})
        e.preventDefault()
        const InfoOrder = {...count}
        localStorage.setItem('InfoOrder', JSON.stringify(InfoOrder))
        setCount(formOrder)
        setDisabled({disabled: false})
    }

    console.log(count)
    return (
        <form onSubmit={shareForms}>
            <label>Name: <input onChange={(e)=> {setCount({...count, name:e.target.value }) }} type="text"  value={count.name}/></label>
            <label>Phone number: <input onChange={(e)=> {setCount({...count, phone:e.target.value })}} type="tel" id={'phone'} value={count.phone}/></label>
            <label>Address: <input onChange={(e)=> {setCount({...count, address:e.target.value })}} type="search" value={count.address}/></label>
            <button disabled={disabled.disabled}>Save</button>
        </form>
    )
}

export default Forms
