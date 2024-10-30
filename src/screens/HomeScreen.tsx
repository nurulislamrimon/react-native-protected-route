import {View, Text, Button} from 'react-native';
import React from 'react';
import {useAuth} from '../providers/AuthProvider';

export default function HomeScreen() {
  const {logout} = useAuth();

  return (
    <View>
      <Text>Hello Mr. This is Auth testing!</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
}
