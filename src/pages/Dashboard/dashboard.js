import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import * as Location from 'expo-location';


import getCurrentWeather from '../../services/api/Api';
import MainCard from '../../components/MainCard/index';
import InfoCard from '../../components/InfoCard/InfoCard';


export default function DashBoard() {
    const [darkTheme, setDarkTheme] = useState(true);
    const [currentTemperature, setCurrentTemperature] = useState('27')
    const [location, setLocation] = useState('BR, Fortaleza')
    const [currentHour, setCurrentHour] = useState('15:00')


    const [wind, setWind] = useState('65')
    const [humidity, setHumidity] = useState('80')
    const [tempMin, setTempMin] = useState('21')
    const [tempMax, setTempMax] = useState('33')
    const [locationCoords, updateCoords] = useState([-38.4874, -3.7413])
    const [morningTemp, setMorningTemp] = useState(10)
    const [eveningTemp, setEveningTemp] = useState(10)
    const [nightTemp, setNightTemp] = useState(10)
    
    const styles = StyleSheet.create({
        ScrollView: {
        backgroundColor: darkTheme ? '#232634' : '#f2f2f2',
        paddingVertical: 50,
        },
        container: {
        flex: 1,
        backgroundColor: darkTheme ? '#232634' : '#f2f2f2',
        alignItems: 'center',
        marginBottom: 50,
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
        },
        infoCards: {
        flexDirection: 'row',
        flexWrap: 'wrap',

        },
        themeButton: {
        margin: 10,
        marginLeft: 300,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 25
        }, 
        squareButton: {
        backgroundColor: darkTheme ? '#f2f2f2' : '#8f8f8f',
        justifyContent: 'center',
        borderRadius: 20,
        marginRight: 20,
        width: 50,
        height: 25,
        },
        circleButton: {
        backgroundColor: darkTheme ? '#232634' : '#f2f2f2',
        alignSelf: darkTheme ? 'flex-end' : 'flex-start',
        margin: 5,
        height: 20,
        width: 20,
        borderRadius: 50,
    
        
        },



    });

    async function setCurrentWeather(){
        getLocation()


        let date = new Date();
        let hour = date.getHours();
        let minute = date.getMinutes();
        setCurrentHour(hour + ':' + minute);


        let data = await getCurrentWeather(locationCoords)
        setCurrentTemperature(data[0])
        setTempMax(data[1])
        setTempMin(data[2])
        setWind(data[3])
        setHumidity(data[4])
        setLocation(data[5])
        setNightTemp(data[6])
        setEveningTemp(data[7])
        setMorningTemp(data[8])
        
    }

    async function getLocation() {
        let { status } = await Location.requestForegroundPermissionsAsync()
        if(status !== 'granted') {
        console.log('Permission denied.')
        } else {
        let location = await Location.getCurrentPositionAsync({})
        updateCoords(location.coords)
        }


    }
    useEffect(() => {
        setCurrentWeather();
    }, []);

    return (
        <ScrollView style={styles.ScrollView}>
        <View style={styles.container}>
        
        <TouchableOpacity style={styles.refreshButton} onPress={() => setCurrentWeather()}>
        <EvilIcons name="refresh" style={{marginTop: 30}} size={40} color={darkTheme ? 'white' : 'black'} />
        </TouchableOpacity>
        
        
        <Feather name="sun" size={40} color="orange" />
        <View style={styles.temperature}>
            <Text style={styles.temperatureText}>{currentTemperature}</Text>
            <Text style={[styles.temperatureText, {fontSize: 14}]}>°C</Text>
        </View>

        <Text style={[styles.temperatureText, {fontSize: 14}]}>{location} {currentHour}</Text>

        <View style={styles.cardView}>
            <MainCard title={'Manhã'}backgroundColor={darkTheme ? '#ff873d': '#cc6e30'} icon={'morning'} temperature={morningTemp}></MainCard>
            <MainCard title={'Tarde'}backgroundColor={darkTheme ? '#d29600': '#FCC63F'} icon={'afternoon'} temperature={eveningTemp}></MainCard>
            <MainCard title={'Noite'}backgroundColor={darkTheme ? '#008081': '#38B7B8'} icon={'night'} temperature={nightTemp}></MainCard>
        </View>

        <View style={styles.info}>
            <Text style={styles.infoText}>Informações Adicionais </Text>
            <View style={styles.infoCards}>
            <InfoCard title={'Vento'} value={wind + ' m/s'}></InfoCard>
            <InfoCard title={'Umidade'} value={humidity + '%'}></InfoCard>
            <InfoCard title={'Temp. Max.'} value={tempMax + '°C'}></InfoCard>
            <InfoCard title={'Temp. Min.'} value={tempMin + '°C'}></InfoCard>
            </View>
        </View>

        <View style={styles.themeButton}>
            <TouchableOpacity style={styles.squareButton} onPress={() => darkTheme ? setDarkTheme(false) : setDarkTheme(true)}>
            <View style={styles.circleButton} ></View>
            </TouchableOpacity>
        </View>

        </View>
        </ScrollView>
    );
}
