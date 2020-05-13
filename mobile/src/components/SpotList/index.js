import React, { useEffect, useState } from 'react';
import { withNavigation } from 'react-navigation';
import { View, StyleSheet, Text, FlatList, Image, TouchableOpacity } from 'react-native';

import api from '../../services/api';

function SpotList({ tech, navigation }) {
  const [spots, setSpots] = useState([]);

    useEffect(() => {
        async function loadSpots() {
            const response = await api.get('/spots' , {
                params: { tech }
            })
            
            setSpots(response.data);
        }

        loadSpots();
    }, []);

    function handleNavigate() {
      navigation.navigate('Book');
  }

    return (<View style={styles.container}>
            <Text style={styles.title}>Companies that use <Text style={styles.bold}>{tech}</Text></Text>

            <FlatList
                style={styles.list}
                data={spots}
                keyExtractor={spot => spot._id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <Image style={styles.thumbnail} source={{ uri: item.thumbnail_url }} />
                        <Text style={styles.company}>{item.company}</Text>
                        <TouchableOpacity onPress={handleNavigate} style={styles.button}>
                            <Text style={styles.buttonText}>Booking</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
      marginTop: 30,
  },

  title: {
      fontSize: 20,
      color: '#444',
      paddingHorizontal: 20,
      marginBottom: 15,
  },

  bold: {
      fontWeight: 'bold',
  },

  list: {
      paddingHorizontal: 20,
  },

  listItem: {
      marginRight: 15,
  },

  thumbnail: {
      width: 125,
      height: 120,
      resizeMode: 'cover',
      borderRadius: 100,
  },

  company: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
      marginTop: 10,
  },

  button: {
      height: 32,
      backgroundColor: '#65CDEF',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      marginTop: 15,
  },

  buttonText: {
      color: '#FFF',
      fontWeight: 'bold',
      fontSize: 15,
  }
});

export default withNavigation(SpotList);
