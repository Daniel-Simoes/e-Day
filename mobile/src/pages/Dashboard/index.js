import React, { useState, useEffect } from 'react';
import socketio from 'socket.io-client';
import { Alert, Text, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground, StyleSheet, Image, AsyncStorage } from 'react-native';

import SpotList from '../../components/SpotList';

import logo from '../../assets/logo.png';
import Background from '../../assets/background.jpg';

const image = Background;

export default function Dashboard({ navigation }) {
    const [techs, setTechs] = useState([]);


    useEffect(() => {
      AsyncStorage.getItem('user').then(user_id => {
          const socket = socketio('http://localhost:3333', {
              query: { user_id }
          });


          socket.on('booking_response', booking => {
            Alert.alert(`Your booking in ${booking.spot.company} on ${booking.date} was ${booking.approved ? 'APPROVED' : 'REJECTED'}`)
        })
    })
}, []);


    useEffect(() => {
        AsyncStorage.getItem('techs').then(storagedTechs => {
            const techsArray = storagedTechs.split(',').map(tech => tech.trim());

            setTechs(techsArray);
        })
    }, []);

    function handleLogout() {
        navigation.navigate('Login');
    }

    return (
      <>
      <ImageBackground source={image} style={styles.image} opacity="0.3">
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={logo} />
            <ScrollView>
              {techs.map(tech => <SpotList key={tech} tech={tech} /> )}
            </ScrollView>
        </SafeAreaView>
        <TouchableOpacity  onPress={handleLogout} style={styles.button}>
        <Text style={styles.buttonText}>Log out</Text>
      </TouchableOpacity>
      </ImageBackground>
     
      </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
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
    button: {
        height: 68,
        backgroundColor: 'rgba(0, 0, 0, 0.150)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop:-10
    },
})

