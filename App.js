import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import MainCard from './components/MainCard';
import InfoCard from './components/InfoCard';

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [currentTemperature, setCurrentTemperature] = useState('27')
  const [location, setLocation] = useState('BR, Fortaleza')
  
  const styles = StyleSheet.create({
    ScrollView: {
      backgroundColor: darkTheme ? '#232634' : '#f2f2f2',
      paddingVertical: 5,
      paddingVertical: 50,
    },
    container: {
      flex: 1,
      backgroundColor: darkTheme ? '#232634' : '#f2f2f2',
      alignItems: 'center',
    },
    temperature: {
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 10,
    },
    temperatureText: {
      color: darkTheme ? '#e0e0e0' : 'black',
      fontSize: 50,
    },
    refreshButton: {
      position: 'absolute',
      marginLeft: 30,
      alignSelf: 'flex-start',
    },
    cardView: {
      color: darkTheme ? 'black' : 'white',
      margin: 10,
      marginLeft: 30,
      marginRight: 30,
      flexDirection: 'row',
      alignItems: 'center',
    },
    info: {
      alignItems: 'center',
      backgroundColor: darkTheme ? '#393e54' : '#8f8f8f',
      borderRadius: 20,
      width: 350,
      height: 250,
    },
    infoText: {
      color: darkTheme ? '#e0e0e0' : 'white',
      margin: 15,
      fontSize: 20,
      fontWeight: 'bold',
    }


  });

  

  return (
    <ScrollView style={styles.ScrollView} bouncesZoom={true}>
    <View style={styles.container}>
      
      <TouchableOpacity style={styles.refreshButton}>
      <EvilIcons name="refresh" style={{marginTop: 30}} size={40} color={darkTheme ? 'white' : 'black'} />
      </TouchableOpacity>
      
      
      <Feather name="sun" size={40} color="orange" />
      <View style={styles.temperature}>
        <Text style={styles.temperatureText}>{currentTemperature}</Text>
        <Text style={[styles.temperatureText, {fontSize: 14}]}>°C</Text>
      </View>

      <View style={styles.cardView}>
        <MainCard title={'Manhã'}backgroundColor={darkTheme ? '#ff873d': '#cc6e30'} icon={'morning'} temperature={'21'}></MainCard>
        <MainCard title={'Tarde'}backgroundColor={darkTheme ? '#d29600': '#FCC63F'} icon={'afternoon'} temperature={'31'}></MainCard>
        <MainCard title={'Noite'}backgroundColor={darkTheme ? '#008081': '#38B7B8'} icon={'night'} temperature={'33'}></MainCard>
      </View>

      <View style={styles.info}>
        <Text style={styles.infoText}>Informações Adicionais </Text>
        <View style={styles.infoCards}>
          <InfoCard title={'Wind'} value={'65 km/h'}></InfoCard>
          <InfoCard title={'Wind'} value={'65 km/h'}></InfoCard>
          <InfoCard title={'Wind'} value={'65 km/h'}></InfoCard>
          <InfoCard ></InfoCard>
        </View>
      </View>

    </View>
    </ScrollView>
  );
}

