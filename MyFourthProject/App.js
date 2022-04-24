import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, Image, FlatList, SectionList } from 'react-native';
import { Component } from 'react-native';
import react, { Component, useState } from 'react';

export default StatesApp = () => {
  return (
    <View style={{flex: 1, paddingTop:22}}>
      <SectionList
      sections={[
        {title: 'A', data: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']},
        {title: 'C', data: ['California', 'Colorado', 'Connecticut']},
        {title: 'D', data: ['Delaware']},
        {title: 'F', data: ['Florida']},
        {title: 'G', data: ['Georgia']},
        {title: 'H', data: ['Hawaii']},
        {title: 'I', data: ['Idaho', 'Illinois', 'Indiana', 'Iowa']},
        {title: 'K', data: ['Kentucky']},
        {title: 'M', data: ['Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi']},

      ]}//you can continue with more sections
      renderItem={({item}) => <Text style={{padding: 10, fontSize: 20, height: 44,}}> {item} </Text>}
      renderSectionHeader={({section}) => <Text style={{paddingTop: 4, paddingLeft: 10, 
        paddingRight: 10, 
        paddingBottom: 4, 
        fontSize: 14, 
        fontWeight: 'bold', 
        backgroundColor: '#8B8C94',}}>{section.title}</Text>}//set your custom color
        keyExtractor={(item,index) =>index}
      />
    </View>
  );// end of return statement 
}