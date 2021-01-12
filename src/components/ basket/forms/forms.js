// import './forms.css'
// import {useState} from "react";
// import {useDispatch} from "react-redux";
// import {addLocal} from "../../../redux/actions-creator/actCreators";
// import React from 'react'
// const formOrder = {name: '', phone: '', address: ''}
//
//
// const Forms = ({numb}) =>{
//     const dispatch = useDispatch()
//     const [count, setCount] = useState(formOrder)
//     const [disabled, setDisabled] = useState({disabled: false})
//     const shareForms = (e) => {
//         setDisabled({disabled: true})
//         e.preventDefault()
//         const InfoOrder = {...count, pizzas: numb}
//         dispatch(addLocal(InfoOrder))
//         setCount(formOrder)
//         setDisabled({disabled: false})
//
//     }
//
//     console.log(count)
//     return (
//         <form onSubmit={shareForms(count)} >
//             <label>Name: <input onChange={(e)=> {setCount({...count, name:e.target.value }) }} type="text"  value={count.name}/></label>
//             <label>Phone number: <input onChange={(e)=> {setCount({...count, phone:e.target.value })}} type="tel" id={'phone'} value={count.phone}/></label>
//             <label>Address: <input onChange={(e)=> {setCount({...count, address:e.target.value })}} type="search" value={count.address}/></label>
//             <button disabled={disabled.disabled} >Save</button>
//         </form>
//     )
// }
//
// export default Forms
