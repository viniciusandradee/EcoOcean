// src/Navigation/ProfileStackNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '@/Screens/Volunteer/Home';
import OnGoingEvents from '@/Screens/Volunteer/OnGoingEvents';
import JoinMatchDetails from '@/Screens/Volunteer/JoinMatchDetails';
import MatchDetails from '@/Screens/Volunteer/MatchDetails';
import Info from '@/Screens/Volunteer/Info';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="JoinMatchDetails" component={JoinMatchDetails} />
      <Stack.Screen name="MatchDetails" component={MatchDetails} />
      <Stack.Screen name="OnGoingEvents" component={OnGoingEvents} />
      <Stack.Screen name="Info" component={Info} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
