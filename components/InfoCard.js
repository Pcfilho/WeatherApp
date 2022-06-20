import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const InfoCard = (props) => {

    const styles = StyleSheet.create({
        card: {
            alignItems: 'center',
            margin: 10,
            minWidth: 150,
        },
        
        text: {
            
        }

    });


    return (
        <View style={styles.card}>
            <Text style={styles.text}>{props.title}</Text>
            <Text style={styles.text}>{props.value}</Text>
        </View>
    )
}

export default InfoCard