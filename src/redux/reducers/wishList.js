const initialState = {
    wishList: [],
    summ: [],
}

export const wishList = (state=initialState, action) =>{
    switch (action.type){
        case 'ADD_PRODUCT':{
            let arr = [...state.wishList];
            arr.push(action.payload);
            return {...state, wishList: arr}
        }
        case 'NEW_PRICES':{
            console.log(action.payload)
            return {...state, summ: action.payload}
        }
        default:{
            return state;
        }
    }
}
