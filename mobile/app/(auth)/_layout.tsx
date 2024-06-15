import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AuthLayout = () => {
    return (
        <>
            <Stack
            >
                <Stack.Screen
                    name='login'
                    options={{
                        title: "Login",
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='signup'
                    options={{
                        title: "Signup",
                        headerShown: false
                    }}
                />
            </Stack>
        </>
    )
}

export default AuthLayout