import {View, Text, Button} from 'react-native';
import React from 'react';
import {useAuth} from '../providers/AuthProvider';

export default function Login() {
  const {login} = useAuth();
  return (
    <View>
      <Text>Login</Text>
      <Button title="Login" onPress={login} />
    </View>
  );
}
