import { ThemedText } from '@/presentation/theme/components/themed-text'
import React from 'react'
import { View } from 'react-native'

const HomeScreen = () => {
    return (
        <View className='pt-20 px-10'>
            <ThemedText className='font-Kanit-Bold text-light-text text-2xl'>HomeScreen</ThemedText>
            <ThemedText className='font-Kanit-Regular text-2xl'>HomeScreen</ThemedText>
            <ThemedText className='font-Kanit-Thin text-2xl'>HomeScreen</ThemedText>
        </View>
    )
}

export default HomeScreen