import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import {AuthProvider} from './providers/AuthProvider';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </AuthProvider>
  );
}
