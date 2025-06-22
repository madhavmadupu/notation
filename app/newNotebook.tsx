import { Link, router } from 'expo-router'
import { ArrowLeft, ChevronLeft } from 'lucide-react-native'
import { View, Text, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '~/constants/colors'

const newNotebook = () => {
    return (
        <SafeAreaView>
            <View className='flex flex-row items-center px-4 py-2 gap-4'>
                <Pressable
                    className='p-2 rounded-full bg-white shadow-md elevation-none'
                    onPress={() => router.back()}
                    style={{ zIndex: 1, elevation: 1 }}
                >
                    <ChevronLeft
                        size={28}
                        color={Colors.black}
                        strokeWidth={1.5}
                    />
                </Pressable>

                <Text
                    className='text-2xl'
                    style={{ color: Colors.black, fontFamily: 'LexendDeca', fontWeight: 'black' }}
                >
                    New Notebook
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default newNotebook