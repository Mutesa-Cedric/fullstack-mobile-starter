import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '@/components/CustomButton'
import { useRouter } from 'expo-router'

const Onboarding = () => {
    const router = useRouter();
    return (
        <SafeAreaView
            className='bg-white'
        >
            <ScrollView
                contentContainerStyle={{
                    height: "100%"
                }}
            >
                <View className='h-full items-center justify-center px-6'>
                    <Image
                        source={require("../assets/images/welcome.png")}
                        resizeMode='contain'
                        className='w-[240px] h-[240px]'
                    />
                    <Text className='text-2xl font-semibold'>Welcome to our app</Text>
                    <Text className='text-center text-lg text-gray-500 py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, at, iusto repellendus eveniet error odio </Text>
                    <View className='w-full mt-6'>
                        <CustomButton
                            title='Login'
                            handlePress={() => router.push("/login")}
                        />
                        <CustomButton
                            title='Create Account'
                            handlePress={() => router.push("/signup")}
                            variant='outline'
                            containerStyles='mt-5'
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Onboarding