import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from '@/Context/AuthContext';
import AppNavigator from '@/Navigation/AppNavigator';

import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

const App = () => {

  const [fontsLoaded] = useFonts({
    'OpenSans-Regular': require('./assets/Fonts/OpenSans-Regular.ttf'),
    'OpenSans-SemiBold': require('./assets/Fonts/OpenSans-SemiBold.ttf'),
    'OpenSans-Bold': require('./assets/Fonts/OpenSans-Bold.ttf'),
    'Quando-Regular': require('./assets/Fonts/Quando-Regular.ttf'),
  });

  React.useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;  // Render null until fonts are loaded
  }

  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
};

export default App;
