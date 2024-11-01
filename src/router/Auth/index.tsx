import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Login from '../../screens/Login';
import Signup from '../../screens/Signup';

const Stack = createStackNavigator();

export default function Auth() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}
