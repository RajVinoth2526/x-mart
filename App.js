import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/homescreen';
import LoginScreen from './src/screens/auth/loginscreen';
import RegistrationScreen from './src/screens/auth/registerscreen';
import ProfileScreen from './src/screens/profilescreen';
import ShoppingScreen from './src/screens/shoppingscreen';
import CardScreen from './src/screens/cardscreen';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={RegistrationScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Shopping" component={ShoppingScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Card" component={CardScreen} options={{ headerShown: false }}/>

        {/* Add more screens here if needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
