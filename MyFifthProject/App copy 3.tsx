import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View>
      <View style={{flex: 1, backgroundColor: 'red'}}/>
      <View style={{flex: 1, backgroundColor: 'yellow'}}/>
      <View style={{flex: 1, backgroundColor: 'blue'}}/>
    </View>
  );
}
