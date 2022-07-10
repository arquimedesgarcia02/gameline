import * as React from 'react';
import { Text, View, Image} from 'react-native';
import styles from './styles/Styles';
import HomeScreen from './screens/Home';
import RegistrationScreen from './screens/Registration';
import LoginScreen from './screens/Login';
import HeaderComponent from './screens/Header';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{title: null}}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

