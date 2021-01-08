export const getProducts = (product) => ({
    type: 'SET_PRODUCTS',
    payload: product
});

export const addProduct = (product) => ({
    type: 'ADD_PRODUCT',
    payload: product
})
