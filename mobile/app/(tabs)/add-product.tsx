import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/CustomInput'
import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const AddProduct = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: 0
    });
    return (
        <SafeAreaView className='p-3 px-5 h-full justify-center'>
            <View>
                <Text className='text-xl font-rubiksemibold text-gray-800'>Add Product</Text>
                <Text className='text-gray-600 text-base'>Fill in the form below to add a new product</Text>
            </View>
            <View className='mb-5 mt-8'>
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
                title='Add Product'
                handlePress={() => console.log(formData)}
                containerStyles='mt-8'
            />
        </SafeAreaView>
    )
}

export default AddProduct