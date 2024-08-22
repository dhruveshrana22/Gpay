import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {BaseColors} from './app/config/theme';
import {Provider} from 'react-redux';
import {persistor, store} from './app/redux/store/configureStore';
import {PersistGate} from 'redux-persist/integration/react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './app/screen/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

const Auth = () => {
  <Stack.Navigator initialRouteName="IntroScreen">
    <Stack.Screen
      name="IntroScreen"
      component={IntroScreen}
      options={{headerShown: false}}
    />
    ;
  </Stack.Navigator>;
};
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar
          barStyle={'light-content'}/>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="SplashScreen">
              <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};


export default App;
