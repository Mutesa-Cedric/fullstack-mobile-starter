import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/CustomInput'
import { Link } from 'expo-router'
import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Signup = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });
    return (
        <SafeAreaView>
            <View className='h-full  justify-center px-6'>
                <Text className='text-2xl font-semibold'>Create account</Text>
                <Text className='text-gray-500 text-base'>Join thousands of other users today.</Text>
                <View className='w-full mt-10'>
                    <CustomInput
                        label='Full Name'
                        value={formData.name}
                        onChangeText={(val) => setFormData({ ...formData, name: val })}
                    />
                    <CustomInput
                        label='Email'
                        value={formData.email}
                        onChangeText={(val) => setFormData({ ...formData, email: val })}
                        containerStyles='mt-3'
                    />
                    <CustomInput
                        label='Password'
                        secureTextEntry
                        onChangeText={(val) => setFormData({ ...formData, password: val })}
                        containerStyles='mt-3'
                    />
                </View>
                <CustomButton
                    title='Signup'
                    handlePress={() => { }}
                    containerStyles='mt-8'
                />
                <View className='flex flex-row gap-1 mt-3'>
                    <Text className='text-base'>Already have an account?</Text>
                    <Link href={'/login'}>
                        <Text className='text-cyan-600 text-base'>login</Text>
                    </Link>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Signup

