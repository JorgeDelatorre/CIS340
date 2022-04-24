import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, Image, FlatList } from 'react-native';
import { Component } from 'react-native';
import react, { Component, useState } from 'react';

export default StatesApp = () => {
  return (
    <View style={{flex: 1, paddingTop:22}}>
      <FlatList
      data={[
        {key: 'Alabama'},
        {key: 'Alaska'},
        {key: 'Arizona'},
        {key: 'Arkansas'},
        {key: 'California'},
        {key: 'Colorado'},
        {key: 'Connecticut'},
        {key: 'Delaware'},
        {key: 'Florida'},
        {key: 'Georgia'},
        {key: 'Hawaii'},
        {key: 'Idaho'},
        {key: 'Illinois'},
        {key: 'Indiana'},
        {key: 'Iowa'},
        {key: 'Kentucky'},
        {key: 'Maine'},
        {key: 'Maryland'},
        {key: 'Massachusetts'},
        {key: 'Michigan'},
        {key: 'Minnesota'},
        {key: 'Mississippi'}

      ]}
      renderItem={({item}) => <Text style={{padding: 10, fontSize: 20, height: 44,}}> {item.key} </Text>}
      />
    </View>
  );// end of return statement
}