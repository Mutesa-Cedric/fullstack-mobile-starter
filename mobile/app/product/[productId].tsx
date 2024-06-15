import CustomButton from '@/components/CustomButton';
import CustomInput from '@/components/CustomInput';
import Ioicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProductView = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: 'my product',
        description: 'this is a product',
        price: 12
    });

    return (
        <SafeAreaView className='bg-white h-full p-3'>
            <View className='flex-row justify-between'>
                <TouchableOpacity
                    onPress={() => router.push('/home')}
                    className='flex-row items-center h-fit'>
                    <Ioicons name='arrow-back' size={24} />
                    <Text>Back to products</Text>
                </TouchableOpacity>
                <CustomButton
                    handlePress={() => console.log('delete')}
                    title='Delete'
                    variant='outline'
                    titleStyles='text-red-500'
                    containerStyles='border-red-500 w-32 py-1'
                />
            </View>
            <View className='mt-6'>
                <Text className='text-xl font-rubiksemibold text-gray-800'>Product Details</Text>
                <View className='mb-5 mt-4'>
                    <CustomInput
                        value={formData.name}
                        label='Product Name'
                        placeholder='Enter product name'
                        onChangeText={(val) => setFormData({ ...formData, name: val })}
                    />
                    <CustomInput
                        value={formData.description}
                        label='Description'
                        placeholder='Enter product description'
                        onChangeText={(val) => setFormData({ ...formData, description: val })}
                        multiline
                        numberOfLines={4}
                        containerStyles='mt-3'
                    />
                    <CustomInput
                        value={formData.price.toString() === 'NaN' ? '' : formData.price.toString()}
                        label='Price (in USD)'
                        placeholder='Enter product price'
                        onChangeText={(val) => setFormData({ ...formData, price: parseInt(val) })}
                        keyboardType='numeric'
                        containerStyles='mt-3'

                    />
                </View>
                <CustomButton
                    title='Update Product'
                    handlePress={() => console.log(formData)}
                    containerStyles='mt-8'
                />
            </View>
        </SafeAreaView>
    )
}

export default ProductView