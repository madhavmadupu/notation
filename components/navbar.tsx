import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { ChevronRight, Mic, Plus, Stars } from 'lucide-react-native'
import { Colors } from '~/constants/colors'
import * as Haptics from 'expo-haptics'

const NavBar = () => {
    return (
        <View
            className='absolute bottom-4 self-center flex-row items-center justify-center px-2 py-2 gap-4 rounded-full w-fit flex-shrink-0 mx-auto my-4 elevation-2 z-[1000] shadow-lg'
            style={{ backgroundColor: Colors.black }}
        >
            <Link
                href='/voiceNote'
                onPress={ () => Haptics.selectionAsync() }
                className='p-4 rounded-full bg-white shadow-md elevation-none'
            >
                <Mic
                    size={24}
                    color={Colors.black}
                    strokeWidth={1.5}
                />
            </Link>
            <Link
                href='/newNote'
                className='p-4 rounded-full shadow-md elevation-none'
                style={{ backgroundColor: Colors.lime }}
                onPress={ () => Haptics.selectionAsync() }
            >
                <Plus
                    size={24}
                    color={Colors.black}
                    strokeWidth={1.5}
                />
            </Link>
            <Link
                href='/ai'
                onPress={ () => Haptics.selectionAsync() }
                className='p-4 rounded-full bg-white shadow-md elevation-none'
            >
                <Stars
                    size={24}
                    color={Colors.black}
                    strokeWidth={1.5}
                />
            </Link>
        </View>
    )
}

export default NavBar