import { View, ActivityIndicator } from 'react-native'
import React from 'react'

const Loading = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 5, }}>
            <ActivityIndicator size={30} />
        </View>
    )
}

export default Loading