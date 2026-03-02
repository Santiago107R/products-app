import React from 'react'
import { View, Text, TextInputProps, TextInput } from 'react-native'
import {Ionicons} from '@expo/vector-icons'

interface Props extends TextInputProps {
    icon?: keyof typeof Ionicons.glyphMap;
}

const ThemedTextInput = ({ icon, ...rest }: Props) => {
    return (
        <TextInput 
            {...rest}
        />
    )
}

export default ThemedTextInput