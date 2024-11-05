import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './AdminArea/BottomTabNavigator';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
