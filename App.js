import * as React from 'react';
import { Text, View, Image} from 'react-native';
import styles from './styles/Styles';
import HomeScreen from './screens/Home';
import RegistrationScreen from './screens/Registration';
import LoginScreen from './screens/Login';
import BetScren from './screens/Bet'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LiveScreen from './screens/Live';
import TrendsScreen from './screens/Trends';
import  {navigationRef} from './screens/RootNavigation';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
          
        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={{title: null, headerShown: false}}
        />
        <Stack.Screen
          name='Registration'
          component={RegistrationScreen}
          options={{title: null, headerShown: false}}
        />
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{title: null, headerShown: false, headerBackVisible: false}}
        />
        <Stack.Screen
          name='Live'
          component={LiveScreen}
          options={{title: null, headerShown: false, headerBackVisible: false}}
        />
        <Stack.Screen
          name='Trends'
          component={TrendsScreen}
          options={{title: null, headerShown: false, headerBackVisible: false}}
        />
        <Stack.Screen
          name='Bet'
          component={BetScren}
          options={{title: null, headerShown: false, headerBackVisible: false}}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

