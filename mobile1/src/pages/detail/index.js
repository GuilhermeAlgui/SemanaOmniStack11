import React from 'react';

import {Feather} from '@expo/vector-icons';
import { View, FlatList, Image, Text, TouchableOpacity, Linking  } from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';


import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function detail() {
    const route = useRoute();
   const incident = route.params.incident;
    const message = `Ola ${incident.name} estou entrando em contato para ajudar no caso "${incident.title}" de valor ${incident.valor}`;
    const navigation = useNavigation();
    function navigateBack(){
        navigation.goBack(); 
    }


    function sendMail(){
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message,
        })
    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=95991241240&text=${message}`);
    }


    return (
        <View style= {styles.container}>
            <View style ={styles.header}>
            <Image source = {logoImg}/>
            <TouchableOpacity onPress = {navigateBack}>
                <Feather name = "arrow-left" size={28} color="#e02041"/>
            </TouchableOpacity>
             </View>

        <View style = {styles.incident}>
                 <Text style ={[styles.incidentProperty, {marginTop: 0}]}>
                    ONG:
                </Text>
                <Text style ={styles.incidentValue}>
                    {incident.name} de {incident.city}/{incident.uf}
                </Text>

                <Text style ={styles.incidentProperty}>
                    CASO:
                </Text>
                <Text style ={styles.incidentValue}>
                    {incident.title}
                </Text>
                <Text style ={styles.incidentProperty}>
                    VALOR:
                </Text>
                <Text style ={styles.incidentValue}>
                    {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}
                </Text> 
        </View>

        <View style= {styles.contactBox}>
            <Text style = {styles.heroTitle}>Salve o dia!</Text>
            <Text style = {styles.heroTitle}>Seja o heroi nesse caso!</Text>

            <Text style = {styles.heroDescription}>Entre em contato</Text>

            <View style= {styles.actions}>

                <TouchableOpacity style ={styles.action} onPress = {sendWhatsapp}>
                    <Text style={styles.actionText}>whatsApp</Text>
                </TouchableOpacity>

                <TouchableOpacity style ={styles.action} onPress= {sendMail}>
                    <Text style={styles.actionText}>E-Mail</Text>
                </TouchableOpacity>

            </View>

        </View>


        </View>



    );
  
}
