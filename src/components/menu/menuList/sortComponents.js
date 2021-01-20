
export const Sort = (action, arr) => {

    switch(action){
        case 'notSort': {
            return arr
        }
        case 'High':{
            const arrSort = arr.sort((a,b)=> b.price - a.price)
            return arrSort
        }
        case 'Less':{
            const arrSort = arr.sort((a,b)=> a.price - b.price)
            return arrSort
        }
        default:{
            return arr
        }
    }
}