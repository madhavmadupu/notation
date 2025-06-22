import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function ProductPage() {
  const { id } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Notebook ID: {id}</Text>
    </View>
  );
}
