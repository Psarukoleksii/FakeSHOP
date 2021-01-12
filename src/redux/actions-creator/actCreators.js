export const getProducts = (product) => ({
    type: 'SET_PRODUCTS',
    payload: product
});

export const addProduct = (product) => ({
    type: 'ADD_PRODUCT',
    payload: product
})
export const addLocal = (localStore) => ({
    type: 'ADD_LOCAL',
    payload: localStore
})
export const deleteProduct = (products) => ({
    type: 'DELETE_PRODUCT',
    payload: products
})
