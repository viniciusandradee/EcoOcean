import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './VolunteerArea/BottomTabNavigator';

const Stack = createStackNavigator();

const VolunteerStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

export default VolunteerStackNavigator;
