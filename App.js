import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from './Screen/LogIn';
import EditScreen from './Screen/EditScreen'
import SignIn from './Screen/SignIn';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen options={{headerShown: false}}  name="LogIn" component={LogIn} />
        <Stack.Screen options={{headerShown: false}}  name="Edit" component={EditScreen} />
        <Stack.Screen options={{headerShown: false}}  name="Sign" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;