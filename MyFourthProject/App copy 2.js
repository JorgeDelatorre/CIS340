import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Component } from 'react-native';
import react, { Component, useState } from 'react';

export default function wordConvertor() {
  const [text, setText]=useState('');
  return (
    <View style={{padding: 40}}>
      <TextInput
      style={{height: 40}}
      placeholder="Input your text here!"
      onChangeText={text => setText(text)}
      defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text.split(' ').map((word) => word && '*').join('  ')}
      </Text>
    </View>
  );
}