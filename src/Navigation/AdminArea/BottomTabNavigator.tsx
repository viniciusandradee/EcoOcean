import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeStackNavigator from './HomeStackNavigator';
import Config from '@/Screens/Admin/Configs';
import ConfigStackNavigator from './ConfigStackNavigator';

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
                    } else if (route.name === 'ConfigTab') {
                        iconName = focused ? require('../../../assets/Images/ConfigSelected.png') : require('../../../assets/Images/ConfigIcon.png');
                        iconStyle = focused ? styles.configSelected : styles.configIcon;
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
            <Tab.Screen name="ConfigTab" component={ConfigStackNavigator} />
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
    configIcon: {
        width: 45,
        height: 45,
    },
    configSelected: {
        width: 65,
        height: 65,
    },
});

export default BottomTabNavigator;
