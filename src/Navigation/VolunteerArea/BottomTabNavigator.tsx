import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeStackNavigator from './HomeStackNavigator';
import ProfileStackNavigator from './ProfileStackNavigator';
import Rank from '@/Screens/Volunteer/Rank';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let iconName;
                    let iconStyle;

                    if (route.name === 'HomeTab') {
                        iconName = focused ? require('../../../assets/Images/PlayIconSelected.png') : require('../../../assets/Images/PlayIcon.png');
                        iconStyle = focused ? styles.playIconSelected : styles.playIcon;
                    } else if (route.name === 'RankTab') {
                        iconName = focused ? require('../../../assets/Images/RankIconSelected.png') : require('../../../assets/Images/Medal.png');
                        iconStyle = focused ? styles.rankIconSelected : styles.rankIcon;
                    } else if (route.name === 'ProfileTab') {
                        iconName = focused ? require('../../../assets/Images/ProfileIconSelected.png') : require('../../../assets/Images/ProfileIcon.png');
                        iconStyle = focused ? styles.profileIconSelected : styles.profileIcon;
                    }

                    return <Image source={iconName} style={iconStyle} />;
                },
                tabBarStyle: {
                    backgroundColor: '#233DE1',
                    height: '9%',
                    justifyContent: 'center',
                    paddingTop: 20,
                },
                tabBarLabel: '',
                headerShown: false,
                tabBarBackground: () => (
                    <Image
                      source={require('../../../assets/Images/Backgrounds/FooterBackground.png')}
                      style={{ width: '100%', height: '100%' }}
                    />
                  ),
            })}
        >
            <Tab.Screen name="HomeTab" component={HomeStackNavigator} />
            <Tab.Screen name="RankTab" component={Rank} />
            <Tab.Screen name="ProfileTab" component={ProfileStackNavigator} />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    playIcon: {
        width: 45,
        height: 55,
    },
    playIconSelected: {
        width: 65,
        height: 65,
    },
    rankIcon: {
        width: 45,
        height: 55,
    },
    rankIconSelected: {
        width: 65,
        height: 65,
    },
    profileIcon: {
        width: 45,
        height: 45,
    },
    profileIconSelected: {
        width: 65,
        height: 65,
    },
});

export default BottomTabNavigator;
