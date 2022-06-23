import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const MainCard = (props) => {
    const temperature = (props.temperature) ;
    let tempTreat = temperature + "°C";
    
    const Icon = () => {
        if (props.icon == 'morning') {
            return(
                <Feather name="sun" style={styles.cardIcon} size={40} color="white" />
            )
        } else if (props.icon == 'afternoon') {
            return(
                <Fontisto name="day-cloudy" style={styles.cardIcon} size={40} color="white" />            
            )
        } else if (props.icon == 'night') {
            return(
                <Ionicons name="cloudy-night-outline" style={styles.cardIcon} size={40} color="white" />
            )
        }
    }


    const styles = StyleSheet.create({
        card: {
            backgroundColor: props.backgroundColor,
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
            <Text style={styles.text}>{tempTreat}</Text>
        </View>
    )
}

export default MainCard