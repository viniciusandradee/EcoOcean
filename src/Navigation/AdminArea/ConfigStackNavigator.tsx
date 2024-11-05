// src/Navigation/ProfileStackNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Config from '@/Screens/Admin/Configs';
import Info from '@/Screens/Admin/Info';

const Stack = createStackNavigator();

const ConfigStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Config" component={Config} />
      <Stack.Screen name="Info" component={Info} />
    </Stack.Navigator>
  );
};

export default ConfigStackNavigator;
