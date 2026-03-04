import { useProducts } from '@/presentation/products/hooks/useProducts'
import Loading from '@/presentation/theme/components/Loading'
import { View } from 'react-native'
import ProductsList from '../../../presentation/products/components/ProductsList';

const HomeScreen = () => {

    const {productsQuery, loadNextPage} = useProducts()

    if (productsQuery.isLoading) {
        return (
            <Loading />
        )
    }

    return (
        <View style={{paddingHorizontal: 20}}>
            <ProductsList products={productsQuery.data?.pages.flatMap((page) => page) ?? []} loadNextPage={loadNextPage}/>
        </View>
    )
}

export default HomeScreen