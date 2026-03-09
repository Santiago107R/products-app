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

const prepareImages = async (images: string[]): Promise<string[]> => {

    const fileImages = images.filter((image) => image.startsWith('file'));
    const currentImages = images.filter((image) => !image.startsWith('file'));

    if (fileImages.length > 0) {
        const uploadPromises = fileImages.map(uploadImage)
        const uploadedImages = await Promise.all(uploadPromises)

        currentImages.push(...uploadedImages)
    }

    return currentImages.map((img) => img.split('/').pop()!)
}

const uploadImage = async (image: string): Promise<string> => {

    const formData = new FormData() as any;

    formData.append('file', {
        uri: image,
        type: 'image/jpeg',
        name: image.split('/').pop()
    })

    const { data } = await productsApi.post<{ image: string }>(
        '/files/prooduct',
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
    )

    return data.image
}

const updateProduct = async (productLike: Partial<Product>) => {
    const { id, images = [], user, ...rest } = productLike

    try {
        const checkedImages = await prepareImages(images)

        const { data } = await productsApi.patch(`/products/${id}`, {

            ...rest,
            images: checkedImages,
        })

        return data
    } catch (error) {
        throw new Error('Error al actualizar el producto')
    }
}

const createProduct = async (productLike: Partial<Product>) => {
    const { id, images = [], user, ...rest } = productLike

    try {
        const checkedImages = await prepareImages(images)

        const { data } = await productsApi.post('/products', {

            ...rest,
            images: checkedImages,
        })

        return data
    } catch (error) {
        throw new Error('Error al guardar el producto')
    }
}

