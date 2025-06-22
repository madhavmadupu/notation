import '../global.css';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';

export const unstable_settings = {
  initialRouteName: 'index',
};

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'PermanentMarker': require('../assets/fonts/PermanentMarker-Regular.ttf'),
    'LexendDeca': require('../assets/fonts/LexendDeca-VariableFont_wght.ttf'),
  });
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack initialRouteName='index'>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="today" options={{ presentation: 'modal', headerShown: false }} />
        <Stack.Screen name="newNote" options={{ presentation: 'modal', headerShown: false }} />
        <Stack.Screen name="newNotebook" options={{ presentation: 'modal', headerShown: false }} />
        <Stack.Screen name="search" options={{ presentation: 'modal', headerShown: false }} />
        <Stack.Screen name="modal" options={{ title: 'Modal', presentation: 'modal' }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
