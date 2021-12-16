import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const data = {
    id: "123",
    title: "Plant",
    screen: "Plant"
}


const NavOptions = () => {
    return (
        <Text>
            {data.title}
        </Text>
    )
}

export default NavOptions

const styles = StyleSheet.create({})
