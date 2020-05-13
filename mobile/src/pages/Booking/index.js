import React from 'react';
import { Text, SafeAreaView } from 'react-native';

export default function Booking( { navigation }) {
const id = navigation.getParam('id');

  return (
    <SafeAreaView> 
      <Text>{id}</Text>
    </SafeAreaView>     
  );
}

