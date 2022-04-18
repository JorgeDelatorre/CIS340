import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

function Student(props) {
  return (
    <View>
      <Text>Hey, My name is {props.name}, I am a student in CIS340!</Text>
    </View>
  )
}

export default function MultiComp() {
  return (
    <View style={{
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text> Welcome to CIS340 </Text>
      <Student name="Jorge Delatorre"/>
      <Student name="Ramadan Abdunabi"/>
      <Student name="Christian Kiavari"/>
      <Student name="Jon Clark"/>
    </View>
  );
}


