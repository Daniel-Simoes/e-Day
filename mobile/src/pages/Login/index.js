import React, { useState, useEffect } from 'react';
import { View, AsyncStorage, KeyboardAvoidingView, Platform, ImageBackground, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import logo from '../../assets/logo.png';
import Background from '../../assets/background.jpg';
// import { Container } from './styles';

const image = Background

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [techs, setTechs] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
        if (user) {
            navigation.navigate('Dashboard');
        }
    })
}, []);

  async function handleSubmit() {
    const response = await api.post('/sessions', {
        email
    })

    const { _id } = response.data;

    await AsyncStorage.setItem('user', _id);
    await AsyncStorage.setItem('techs', techs);

    navigation.navigate('Dashboard');

  }
  return (
    <>
    <ImageBackground source={image} style={styles.image}>
  <KeyboardAvoidingView enabled={Platform.OS === "ios"} behavior="padding" style={styles.container}>
    
     <Image source={logo} />
     
     <View style={styles.form}>
        <Text style={styles.label}>EMAIL *</Text>
        <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChangeText={setEmail}
        />
        <Text style={styles.label}>TECHNOLOGIES *</Text>
        <TextInput
            style={styles.input}
            placeholder="Techs that you use"
            placeholderTextColor="#999"
            autoCapitalize="words"
            autoCorrect={false}
            value={techs}
            onChangeText={setTechs}
        />
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Look for Experiences</Text>
        </TouchableOpacity>
     </View> 
     
  </KeyboardAvoidingView>
  </ImageBackground>
  </>
  )}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: -100,
      
  },
  form: {
    alignSelf: 'stretch',
    paddingHorizontal: 30,
    marginTop: 30,

  },

 label: {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8,
 },
 input: {
  backgroundColor: '#FFF',
  paddingHorizontal: 20,
  fontSize: 16,
  color: '#444',
  height: 46,
  marginBottom: 16,
  borderRadius: 50
},

button: {
  height: 42,
  backgroundColor: '#65CDEF',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 50,
},

buttonText: {
  color: '#FFF',
  fontWeight: 'bold',
  fontSize: 16,
},
image: {
  flex: 1,
  resizeMode: "cover",
  justifyContent: "center"
},
});