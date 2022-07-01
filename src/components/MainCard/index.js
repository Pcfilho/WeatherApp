import React, { useContext} from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


import { ThemeContext } from '../../contexts/theme';


const MainCard = (props) => {
    const temperature = (props.temperature);
    const { darkTheme } = useContext(ThemeContext)
    
    let tempTreat = (temperature ? temperature.toFixed(0) : temperature);
    let tempText = tempTreat + "°C";
    
    const backgroundColor =  () => {
        if (props.title === 'Manhã') {
            return darkTheme ? '#ff873d' : '#cc6e30';
        }
        if (props.title === 'Tarde') {
            return darkTheme ? '#d29600' : '#FCC63F';
        }
        else {
            return darkTheme ? '#008081' : '#38B7B8';
        }
    } 

    const Icon = () => {
        if (tempTreat < 25) {
            return(
                <Ionicons name="snow-outline" style={styles.cardIcon} size={40} color="white" />
            )
        } else if (tempTreat == 25) {
            return(
                <Ionicons name="cloud-outline" style={styles.cardIcon} size={40} color="white" />            
            )
        } else {
            return(
                <Ionicons name="sunny-outline" style={styles.cardIcon} size={40} color="white" />
            )
        }
    }


    const styles = StyleSheet.create({
        card: {
            backgroundColor: backgroundColor(),
            justifyContent: 'center',
            alignItems: 'center',

            margin: 5,
            width: 110,
            height: 220,
            borderRadius: 10,
        },
        text: {
            color: 'white',
            margin: 15,
            fontSize: 20,
        },

        cardIcon: {
            margin: 15,
        },

    
    });


    return (
        <View style={styles.card}>
            <Text style={styles.text}>{props.title}</Text>
            <Icon></Icon>
            <Text style={styles.text}>{tempText}</Text>
        </View>
    )
}

export default MainCard