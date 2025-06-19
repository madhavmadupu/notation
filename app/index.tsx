import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '~/constants/colors'
import { Search } from 'lucide-react-native'

const HomePage = () => {
    return (
        <SafeAreaView className='flex-1 px-4' style={{ backgroundColor: Colors.offwhite }}>
            <View className='flex-row items-center justify-between'>
                <Text
                    className='text-3xl'
                    style={{ color: Colors.black }}
                >Notee</Text>
                <Pressable
                    className='p-2 rounded-full bg-white shadow-md'
                >
                    <Search
                        size={32}
                        color={Colors.black}
                        strokeWidth={1.5}
                    />
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default HomePage