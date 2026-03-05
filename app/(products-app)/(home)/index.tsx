import { useProducts } from '@/presentation/products/hooks/useProducts'
import Loading from '@/presentation/theme/components/Loading'
import { View } from 'react-native'
import ProductsList from '../../../presentation/products/components/ProductsList';
import { FAB } from '../../../presentation/theme/components/FAB';
import { router } from 'expo-router';

const HomeScreen = () => {

    const { productsQuery, loadNextPage } = useProducts()

    if (productsQuery.isLoading) {
        return (
            <Loading />
        )
    }

    return (
        <View style={{ paddingHorizontal: 20 }}>
            <ProductsList products={productsQuery.data?.pages.flatMap((page) => page) ?? []} loadNextPage={loadNextPage} />

            <FAB 
                iconName='add-outline'
                onPress={() => router.push('/(products-app)/product/new')}
            />
        </View>
    )
}

export default HomeScreen