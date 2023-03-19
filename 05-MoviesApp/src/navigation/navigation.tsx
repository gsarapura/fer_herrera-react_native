import { createStackNavigator } from '@react-navigation/stack';
import { DetailScreeen } from '../screens/DetailsScreen';
import { HomeScreens } from '../screens/HomeScreen';

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreens} />
      <Stack.Screen name="Detail" component={DetailScreeen} />
    </Stack.Navigator>
  );
}
