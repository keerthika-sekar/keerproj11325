import 'react-native-gesture-handler'; 
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from '../screens/Screen1';
import Screen2 from './SecondScreen/Screen2';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="first">
        <Stack.Screen name="first" component={Screen1} />
        <Stack.Screen name="second" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
