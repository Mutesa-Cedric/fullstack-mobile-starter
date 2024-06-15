import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { faker } from "@faker-js/faker"
import { Product } from '@/types';
import CustomButton from '@/components/CustomButton';
import { useRouter } from 'expo-router';
import useAuth from '@/hooks/useAuth';

const products: Product[] = Array.from({ length: 10 }, () => ({
  id: faker.string.uuid(),
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  price: parseInt(faker.commerce.price()),
}))

export default function HomeScreen() {
  const { user } = useAuth();
  const router = useRouter();
  return (
    <SafeAreaView
      className='bg-white h-full px-3 pt-3'
    >
      <FlatList
        data={products}
        ListEmptyComponent={() => (
          <Text className='text-center text-gray-500'>No products available</Text>
        )}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className='p-3  rounded-lg mb-3 border border-gray-200 shadow-sm'>
            <Text className='text-lg font-semibold'>{item.name}</Text>
            <Text className='text-base text-gray-500 mb-3'>{item.description}</Text>
            <Text className='text-base text-cyan-800'>${item.price}</Text>
            <CustomButton
              handlePress={() => router.push(`/product/${item.id}`)}
              title='View'
              containerStyles='mt-3'
              variant='outline'
              titleStyles='text-base'
            />
          </View>
        )}
        ListHeaderComponent={() => (
          <View className='mb-6'>
            <Text className='text-xl text-gray-800 font-rubiksemibold'>Welcome, {user?.name}</Text>
            <Text className='text-gray-500 text-base'>Here are  the products you have created</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
