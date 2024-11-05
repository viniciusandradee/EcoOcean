// AppNavigator.tsx
import React, { useContext } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { AuthContext } from '@/Context/AuthContext';

import AuthStackNavigator from './AuthStackNavigator';
import VolunteerStackNavigator from './VolunteerStackNavigator';
import AdminStackNavigator from './AdminStackNavigator';


const AppNavigator = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const { userData } = useContext(AuthContext);
  return (

    <NavigationContainer>
      {isLoggedIn ? (
        userData?.auth.role === "ADMIN" ? <AdminStackNavigator /> : < VolunteerStackNavigator/>
      ) : (
        <AuthStackNavigator />
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
