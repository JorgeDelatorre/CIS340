import { StatusBar } from 'expo-status-bar';
import react from 'react'
import { StyleSheet, Text, View, TextInput, View} from 'react-native';

function MyApp() {
  return (
    <View>
       <Text>
         Hello I am a student in CIS340 {"\n"}
       </Text>
    </View>
  );
}

export default function MultiComp(){
  return(
    <View style={{
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text> Welcome to my class </Text>
      <MyApp />
      <MyApp />
      <MyApp />
      <MyApp />
    </View>
  )
}


