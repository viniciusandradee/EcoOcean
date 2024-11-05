// src/Navigation/ProfileStackNavigator.tsx
import React from 'react';
import { ImageBackground } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import Profile from '@/Screens/Volunteer/Profile';
import ProfileDetails from '@/Screens/Volunteer/ProfileDetails';

const Stack = createStackNavigator();

const ProfileStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="ProfileDetails" component={ProfileDetails} />
        </Stack.Navigator>

    );
};

export default ProfileStackNavigator;
