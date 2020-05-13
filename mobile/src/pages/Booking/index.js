import React, { useState } from 'react';
import { Text, SafeAreaView, ImageBackground, AsyncStorage, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import Background from '../../assets/background.jpg';

const image = Background;

export default function Booking( { navigation }) {
  const [date, setDate ] = useState('');

  const id = navigation.getParam('id');

  async function handleSubmit() {
    }

  return (
    <>
    <ImageBackground source={image} style={styles.image} opacity="0.3">
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>DATE *</Text>
      <TextInput
        style={styles.input}
        placeholder="Choose a date"
        placeholderColor="#999"
        autoCapitalize="words"
        autoCorrect={false}
        value={date}
        onChangeText={setDate}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Booking</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.cancelButton]}>
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
      marginTop:-600,
  }, 
  
  label: {
      fontWeight: 'bold',
      color: '#444',
      marginBottom: 8,
      marginTop: 30,
  },
  
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    height: 46,
    marginBottom: 16,
    borderRadius: 50,
  },
  
  datePicker: {
      borderColor: '#ddd',
      width: '100%',
      marginBottom: 20,
      borderRadius: 2,
      borderWidth: 1
  }, 
  
  button: {
      height: 42,
      backgroundColor: '#65CDEF',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
  },
  
  cancelButton: {
      backgroundColor: '#FFF',
      marginTop: 10,
  },
  
  buttonText: {
      color: '#FFF',
      fontWeight: 'bold',
      fontSize: 16,
  },

  cancelButtonText: {
    color: '#65CDEF',
    fontWeight: 'bold',
    fontSize: 16,
},

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  
  });

