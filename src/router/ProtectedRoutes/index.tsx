import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../../screens/HomeScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import SettingsScreen from '../../screens/SettingsScreen';

const Stack = createStackNavigator();

export default function ProtectedRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
