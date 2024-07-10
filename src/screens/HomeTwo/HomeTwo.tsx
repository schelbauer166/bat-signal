import React from 'react';
import { View, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import batIcon from '../../../assets/bat-icon.png'
import { styles } from './HomeTwoStyle';

export function HomeTwo() {
    return (
        <View style={styles.container}>
            <Image source={batIcon} style={{ alignItems: 'flex-start' }} />
            <Text style={styles.text}>Nome</Text>
            <TextInput style={styles.input} placeholder='Digite seu nome'></TextInput>
            <Text style={styles.text}>Telefone</Text>
            <TextInput style={styles.input} placeholder='Digite seu telefone'></TextInput>
            <Text style={styles.text}>Localizacao Atual</Text>
            <TextInput style={[styles.input, styles.inputMaior]} placeholder='Digite sua localizacao...' multiline={true}></TextInput>
            <Text style={styles.text}>Observacao</Text>
            <TextInput style={[styles.input, styles.inputMaior]} placeholder='Caso tenha alguma observacao....' multiline={true}></TextInput>
            <TouchableOpacity>
                <Text style={styles.button}>Enviar</Text>
            </TouchableOpacity>
        </View>
    );
}