const initialState = {
    wishList: []
}

export const wishList = (state=initialState, action) =>{
    switch (action.type){
        case 'ADD_PRODUCT':{
            let arr = [...state.wishList];
            arr.push(action.payload);
            console.log(action.payload)
            console.log(arr);
            return {...state, wishList: arr}
        }
        default:{
            return state;
        }
    }
}
