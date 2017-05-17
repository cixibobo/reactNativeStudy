/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
//引入 React的抽象组件
import React, { Component } from 'react';
//引入 ReactNative的具体组件
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class reactNativeStudy extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('reactNativeStudy', () => reactNativeStudy);
