import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, ImageBackground, StyleSheet, Image, AsyncStorage } from 'react-native';

import SpotList from '../../components/SpotList';

import logo from '../../assets/logo.png';
import Background from '../../assets/background.jpg';

const image = Background

export default function List() {
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storagedTechs => {
            const techsArray = storagedTechs.split(',').map(tech => tech.trim());

            setTechs(techsArray);
        })
    }, []);

    return (
      <>
      <ImageBackground source={image} style={styles.image} opacity="0.3">
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={logo} />
            <ScrollView>
              {techs.map(tech => <SpotList key={tech} tech={tech} /> )}
            </ScrollView>
        </SafeAreaView>
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
})