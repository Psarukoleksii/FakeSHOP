export class ProductService {
    constructor() {
        this.baseUrl = "https://fakestoreapi.com/products";
    }

    getProducts() {
        return fetch(this.baseUrl).then(resp => {
            console.log(resp)
            if (resp.status === 200) {
                console.log(resp.status)
                return resp.json();
            } else {
                return Promise.reject('is not ok: ' + resp.status)
            }
        })
    }
}

export const productService = new ProductService()
