import React, { Component, ReactElement } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { test as tests } from '@/utils/index'

tests()

const styles = StyleSheet.create({
    text: {
        fontSize: 26,
    },
})
export default class App extends Component {
    render(): ReactElement {
        return (
            <View>
                <Text style={[styles.text, { color: 'red' }]}> app </Text>
            </View>
        )
    }
}
