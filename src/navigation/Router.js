import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Actions, Scene, Router} from 'react-native-router-flux';
import LoadingScreen from '../component/LoadingScreen';
import LoginScreen from '../component/LoginScreen';

const Stack = createStackNavigator();

export const RouterComponent = Actions.create(
  <Router>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Loading"
          component={LoadingScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </Router>,
);
