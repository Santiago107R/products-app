import { KeyboardAvoidingView, ScrollView, useWindowDimensions, View, TextInput } from 'react-native'
import React from 'react'
import { ThemedText } from '@/presentation/theme/components/themed-text'
import ThemedTextInput from '@/presentation/theme/components/ThemedTextInput';


const LoginScreen = () => {

    const { height } = useWindowDimensions()

    return (
        <KeyboardAvoidingView
            behavior='padding'
            style={{ flex: 1 }}
        >
            <ScrollView style={{ paddingHorizontal: 40, }}>
                <View style={{ paddingTop: height * 0.35 }}>
                    <ThemedText type='title'>Ingresar</ThemedText>
                    <ThemedText style={{ color: 'grey' }}>Por favor ingrese para continuar</ThemedText>
                </View>

                {/* Email y Password  */}
                <View style={{ marginTop: 20, }}>
                    <ThemedTextInput
                        placeholder='Correo electrónico'
                        keyboardType='email-address'
                        autoCapitalize='none'
                        icon='mail-outline'
                    // value=''
                    // onChange={}
                    />

                    <ThemedTextInput
                        placeholder='Contraseña'
                        secureTextEntry
                        autoCapitalize='none'
                        icon='lock-closed-outline'
                    // value=''
                    // onChange={}
                    />
                </View>

            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen