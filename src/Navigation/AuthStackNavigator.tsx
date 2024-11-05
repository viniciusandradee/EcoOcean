// AuthStackNavigator.tsx
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Login from '@/Screens/Auth/Login';
import SignUp from '@/Screens/Auth/SignUp';

const Stack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
