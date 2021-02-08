import React from 'react';
import {createAppContainer, createSwitchNavigator } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import {AppDrawerNavigator} from './components/AppDrawerNavigation'

export default function App() {
  return (
    <AppContainer/>
  );
}

const switchNavigation = createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  Drawer:{screen: AppDrawerNavigator}
})

const AppContainer = createAppContainer(switchNavigator);

