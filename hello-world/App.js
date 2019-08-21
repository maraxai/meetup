import React from 'react';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import Start from './components/start';
import Chat from './components/chat';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';

const navigator = createStackNavigator({
  Start: { screen: Start },
  Chat: { screen: Chat }
});

const navigatorContainer = createAppContainer(navigator);

export default navigatorContainer;
