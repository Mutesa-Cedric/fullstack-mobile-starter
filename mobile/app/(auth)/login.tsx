import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/CustomInput'
import { Link } from 'expo-router'
import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    return (
        <SafeAreaView>
            <View className='h-full  justify-center px-6'>
                <Text className='text-2xl font-semibold'>Login to your account</Text>
                <Text className='text-gray-500 text-base pt-2'>Enter your email and password below</Text>
                <View className='w-full mt-10'>
                    <CustomInput
                        label='Email'
                        value={formData.email}
                        onChangeText={(val) => setFormData({ ...formData, email: val })}
                    />
                    <CustomInput
                        label='Password'
                        secureTextEntry
                        onChangeText={(val) => setFormData({ ...formData, password: val })}
                        containerStyles='mt-3'
                    />
                </View>
                <CustomButton
                    title='Login'
                    handlePress={() => { }}
                    containerStyles='mt-8'
                />
                <View className='flex flex-row gap-1 mt-3'>
                    <Text className='text-base'>Don't have an account?</Text>
                    <Link href={'/signup'}>
                        <Text className='text-cyan-600 text-base'>signup</Text>
                    </Link>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Login

