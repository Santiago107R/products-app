import { ThemedText } from '@/presentation/theme/components/themed-text'
import React from 'react'
import { View } from 'react-native'

const HomeScreen = () => {
    return (
        <View style={{paddingTop: 20, paddingHorizontal: 10}}>
            <ThemedText style={{fontFamily: 'KanitBold', fontSize: 25}}>HomeScreen</ThemedText>
            <ThemedText style={{fontFamily: 'KanitRegular', fontSize: 20}}>HomeScreen</ThemedText>
            <ThemedText style={{fontFamily: 'KanitThin', fontSize: 18}}>HomeScreen</ThemedText>
            <ThemedText style={{fontSize: 15}}>HomeScreen</ThemedText>
        </View>
    )
}

export default HomeScreen