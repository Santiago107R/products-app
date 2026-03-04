import { getProducts } from "@/core/products/actions/get-products.action"
import { useInfiniteQuery } from "@tanstack/react-query"

export const useProducts = () => {

    const productsQuery = useInfiniteQuery({
        initialPageParam: 0,
        queryKey: ['products', 'infinite'],
        queryFn: ({pageParam}) => getProducts(20, pageParam * 20),
        staleTime: 1000 * 60 * 60,
        getNextPageParam: (lastPage, allPages) => allPages.length

    })

    return {    
        // Properties
        productsQuery,

        // Methods
        loadNextPage: productsQuery.fetchNextPage,

    }
}