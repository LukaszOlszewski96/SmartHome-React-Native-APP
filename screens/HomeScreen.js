import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HomeScreen = () => {
    return (
        
            <View>
                <Text style={styles.text}>Home Screen</Text>
            </View>
        
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: 'red',
        fontSize: 30,
    }
})
