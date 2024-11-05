// src/Navigation/ProfileStackNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '@/Screens/Admin/Home';
import MatchDetails from '@/Screens/Admin/MatchDetails';
import Collect from '@/Screens/Admin/Collect';
import ScheduledEvents from '@/Screens/Admin/ScheduledEvents';
import NewMatch from '@/Screens/Admin/NewMatch';
import MatchDetailsInit from '@/Screens/Admin/MatchDetailsInit';
import Info from '@/Screens/Admin/Info';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="MatchDetails" component={MatchDetails} />
      <Stack.Screen name="Collect" component={Collect} />
      <Stack.Screen name="ScheduledEvents" component={ScheduledEvents} />
      <Stack.Screen name="NewMatch" component={NewMatch} />
      <Stack.Screen name="MatchDetailsInit" component={MatchDetailsInit} />
      <Stack.Screen name="Info" component={Info} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
