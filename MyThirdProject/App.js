import { StatusBar } from 'expo-status-bar';
import react, { useState } from 'react';
import { StyleSheet, Text, View , Button } from 'react-native';

function TV(props) {
  
  const [isOff, setIsOff] = useState(true);

  return (
    <View>
      <Text>
        {"\n\n\n\n\n"}
        This is {props.name} TV, and it is {isOff ? "Off" : "Turned On"}!
      </Text>
      <Button
        onPress={() => {
          setIsOff(false);
        }}
        disabled={!isOff}
        title={isOff ? "Turn me on, please!" : "Thank You!"}
      />
    </View>
  );
}

export default function MultiTVs() {
  return (
    <View>
      <TV name="LG" />
      <TV name="Sony" />
    </View>
  );
}


