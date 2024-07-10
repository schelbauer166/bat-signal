import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import batIcon from '../../../assets/bat-icon-maior.png'
import React, { useState } from 'react';
import { HomeTwo } from '../HomeTwo/HomeTwo';

export function HomeOne() {
    const [isVisible, setIsVisible] = useState(true)

    const handleVisibility = () => {
        setIsVisible(!isVisible)
    }

    return (
        <View style={styles.container}>
            <View style={isVisible ? styles.container : styles.container2}>
                <Image source={batIcon} />
                <TouchableOpacity onPress={handleVisibility}>
                    <Text style={styles.title}>Active Bat Signal</Text>
                </TouchableOpacity>
            </View>
            <View style={!isVisible ? styles.newPage : styles.container2}>
                <HomeTwo />
            </View>

            <StatusBar style="dark" />
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',

    },
    container2: {
        display: 'none'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: 'black',
        color: '#fff'
    },
    newPage: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',

    }
});