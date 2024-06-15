import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Onboarding = () => {
    return (
        <SafeAreaView>
            <ScrollView
                contentContainerStyle={{
                    height: "100%"
                }}
            >
                <View className='h-full items-center justify-center'>
                    <Text className='text-2xl'>Onboarding</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Onboarding