import React from 'react';
import { SafeAreaView, StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';

import logo from '../assets/logo.png';

// import { Container } from './styles';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} />

      <View style={styles.cardContainer}>

        <View style={styles.card}>
          <Image style={styles.avatar} source={{ uri: "https://avatars3.githubusercontent.com/u/27385745?v=4" }} />

          <View style={styles.footer}>
            <Text style={styles.name}>Mariane Santana</Text>
            <Text style={styles.bio}>Riot GRRL forever 🤘🏻. I'm a Mobile Engineer. Android, React-Native. I like Java and Functional Programming.</Text>
          </View>

          
        </View>
      </View>

      
    
    <View>
      <TouchableOpacity></TouchableOpacity>
    </View>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  cardContainer: {
     flex: 1,
     alignSelf: 'stretch',
     justifyContent: 'center',
     maxHeight: 500,
  },
  card: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    margin: 30,
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

  },

  avatar: { 
    flex: 1,
    height: 300,

  },
  footer: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  },
  bio: {
    fontSize: 14,
    color: '#999',
    marginTop: 5,
    lineHeight: 18,

  }
})

export default Home;