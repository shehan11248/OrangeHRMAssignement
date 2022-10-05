import React from 'react';
import {StatusBar} from 'react-native';
import {reducer} from './src/reducers/main/index';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';
import LoadingScreen from './src/component/LoadingScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/component/LoginScreen';
import HomeScreen from './src/component/HomeScreen';
import SignupScreen from './src/component/SignupScreen';
import FlashMessage from 'react-native-flash-message';

const Stack = createStackNavigator();

const App = () => {
  StatusBar.setBackgroundColor('rgba(0,0,0,0)');
  StatusBar.setBarStyle('light-content');
  StatusBar.setTranslucent(true);

  const store = createStore(reducer, {}, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
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

          <Stack.Screen
            name="Sign"
            component={SignupScreen}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="home"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <FlashMessage
        duration={1000}
        floating={true}
        position="top"
        icon="auto"
        style={{marginTop: '10%'}}
      />
    </Provider>
  );
};

export default App;
