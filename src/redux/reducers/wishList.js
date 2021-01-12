const initialState = {
    wishList: [],

}

export const wishList = (state=initialState, action) =>{
    switch (action.type){
        case 'ADD_PRODUCT':{
            let arr = [...state.wishList];
            arr.push(action.payload);
            return {...state, wishList: arr}
            break;
        }
        case 'ADD_LOCAL':{
            console.log(state.wishList)
            localStorage.setItem('InfoOrder', JSON.stringify(action.payload))
            return {...state, wishList: []}
        }
        case 'DELETE_PRODUCT':{
            let numbCopy = [...state.wishList]
            let wishListFilter = numbCopy.filter((v)=> v.id !== +action.payload.id)
            return {...state, wishList: wishListFilter}


        }
        default:{
            return state;
        }
    }
}
