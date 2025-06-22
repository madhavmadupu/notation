import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const today = () => {
    return (
        <SafeAreaView>
            <View>
                <Text>today</Text>
            </View>
        </SafeAreaView>
    )
}

export default today