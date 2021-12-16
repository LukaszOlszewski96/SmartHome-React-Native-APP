import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import {Icon} from 'react-native-elements';


export default function DetailsPlant() {
    return (
        <SafeAreaView style = { styles.conteinerDetailsPlant}>
            <View style = {styles.cardImage}>
                <View style = { styles.arrowConteiner }>
                    <Icon style = {styles.arrow} size = {30} name = "arrow-back"/>
                </View>
                <View style = {styles.imageContainer}>
                    <Image style = {styles.image} source = {require('../assets/plants/plant3.png')}/>
                </View>
            </View>
            <View style = {styles.namePlantBox}>
                <Text style = {styles.namePlant}>Palm</Text>
            </View>
            <View style = {styles.statsPlantCont}>
                <View style = {styles.parameterPlant}>
                    <Icon iconStyle = {styles.icon} name = 'water-outline' type = 'ionicon'/>
                    <View style = {styles.parameterBox}>
                        <Text style = {styles.value}>20 %</Text>
                        <Text style= {styles.valueTitle}>Humidity</Text>
                    </View>
                </View>
                <View style = {styles.parameterPlant}>
                    <Icon iconStyle = {styles.icon} style = {styles.iconParameter} name = 'thermometer-outline' type = 'ionicon'/>
                    <View style = {styles.parameterBox}>
                        <Text style = {styles.value}>10 C°</Text>
                        <Text style= {styles.valueTitle}>Temperature</Text>
                    </View>
                </View>
            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    conteinerDetailsPlant: {
        flex: 1,
        backgroundColor: '#216D2A'
    },
    cardImage: {
        backgroundColor: '#fff',
        flex: 0.7,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    arrowConteiner: {
        marginTop: 35,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingHorizontal: 10,
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        resizeMode: 'contain',
        flex: 1,
    },
    namePlantBox: {
        marginTop: 10,
        paddingHorizontal: 20
    },
    namePlant: {
        fontSize: 24,
        fontWeight: '700',
        color: '#fff',
        fontFamily: 'Roboto'
    },
    statsPlantCont: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        flex: .3
    },
    parameterPlant: {
        flexDirection: 'row',
    },
    parameterBox: {
        flexDirection: 'column',
        marginHorizontal: 5
    },
    value: {
        color: '#fff',
        fontSize: 24,
        fontWeight:'bold'
    },
    valueTitle: {
        color: '#fff',
        fontSize: 9,
    },
    icon: {
        marginTop: 5,
        color: '#fff',
        fontSize: 32
    }




})
