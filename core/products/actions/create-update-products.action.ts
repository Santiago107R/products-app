import { productsApi } from "@/core/api/productsApi";
import { Product } from "../interfaces/product.interface";


export const updateCreateProduct = (productLike: Partial<Product>) => {

    productLike.stock = isNaN(Number(productLike.stock)) ? 0 : Number(productLike.stock)
    productLike.price = isNaN(Number(productLike.price)) ? 0 : Number(productLike.price)

    if (productLike.id && productLike.id !== 'new') {
        return updateProduct(productLike)
    }

    return createProduct(productLike)
}

const updateProduct = async (productLike: Partial<Product>) => {
    const {id, images = [], user, ...rest} = productLike

    try {   

        const { data } = await productsApi.patch(`/products/${id}`, {

            ...rest,
        })

        return data
    } catch(error) {
        throw new Error('Error al actualizar el producto')
    }
}

const createProduct = async (productLike: Partial<Product>) => {
    const {id, images = [], user, ...rest} = productLike

    try {   

        const { data } = await productsApi.post('/products', {

            ...rest,
        })

        return data
    } catch(error) {
        throw new Error('Error al guardar el producto')
    }
}

