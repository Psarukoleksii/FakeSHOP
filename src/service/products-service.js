export class ProductService {
    constructor() {
        this.baseUrl = "https://fakestoreapi.com/products";
    }

    getProducts() {
        return fetch(this.baseUrl).then(v => v.json())
    }
}

export const productService = new ProductService()
