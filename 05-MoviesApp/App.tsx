import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { Navigation } from './src/navigation/navigation';

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
