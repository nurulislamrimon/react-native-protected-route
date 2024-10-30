// Router.tsx
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ProtectedRoutes from './ProtectedRoutes'; // Assumes this includes protected screens
import Auth from './Auth'; // Your auth/login screen
import {useAuth} from '../providers/AuthProvider';

const Tab = createBottomTabNavigator();

export default function Router() {
  const {isAuthorized} = useAuth(); // Get auth status from context

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      {isAuthorized ? (
        <Tab.Screen
          name="Home"
          component={ProtectedRoutes} // Assuming ProtectedRoutes include a stack for protected screens
        />
      ) : (
        <Tab.Screen name="Auth" component={Auth} />
      )}
    </Tab.Navigator>
  );
}
