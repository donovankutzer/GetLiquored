import React, { Component } from 'react';
import { View } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';

export default class App extends React.Component {
  render () {
    return (
      <View style={{flex: 1}}>
        <AppNavigator/>
      </View>
    );
  }
}