import React, { useState } from 'react';
import { Image, Text, SafeAreaView, Alert, ImageBackground, AsyncStorage, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker';


import api from '../../services/api';

import logo from '../../assets/logo.png';
import Background from '../../assets/background.jpg';

const image = Background;

export default function Booking( { navigation }) {
  const [date, setDate ] = useState('');

  const id = navigation.getParam('id');

  async function handleSubmit() {
    const user_id = await AsyncStorage.getItem('user');

    await api.post(`/spots/${id}/bookings`, {
      date
  }, {
      headers: { user_id }
  })

  Alert.alert(
    "Alert",
    "The Booking has been done",
    [
      { text: "OK"}
    ],
    { cancelable: false }
  );

  navigation.navigate('Dashboard');
  
  }
  function handleCancel() {
    navigation.navigate('Dashboard');
}

  return (
    <>
    <ImageBackground source={image} style={styles.image} opacity="0.3">
    <SafeAreaView style={styles.container}>
    <Image style={styles.logo} source={logo} />
      <Text style={styles.label}>DATE *</Text>
      <DatePicker
        style={styles.datePicker}
        date={date}
        mode="date"
        placeholder="Choose a Date"
        format={`DD-MM-YYYY`}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        showIcon={true}
        onDateChange={setDate}
        customStyles={{
          dateInput: {
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderTopWidth: 0,
            borderBottomWidth:0,
          }
      }}
        />

      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Booking</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCancel} style={[styles.button, styles.cancelButton]}>
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
      
    </SafeAreaView>
    </ImageBackground>
    </>  
  );
}

const styles = StyleSheet.create({
  container: {
      margin: 30,
      marginTop:-500,
  }, 
  
  label: {
      fontWeight: 'bold',
      color: '#444',
      marginBottom: 8,
      marginTop: 30,
  },
  
  datePicker: {
      backgroundColor:"#fff",
      width: '100%',
      marginBottom: 10,
      borderRadius: 50,
      
  }, 
  
  button: {
      height: 42,
      backgroundColor: '#65CDEF',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
  },
  
  cancelButton: {
      backgroundColor: '#eab679',
      marginTop: 10,
  },
  
  buttonText: {
      color: '#FFF',
      fontWeight: 'bold',
      fontSize: 16,
  },

  cancelButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
},

logo: {
  height: 70,
  resizeMode: 'contain',
  alignSelf: 'center',
  marginTop: 10
},

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  }, 
  });

