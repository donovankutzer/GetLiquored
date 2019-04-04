import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ShelfScreen extends React.Component {
    render () {
        return(
            <View style={styles.container}>
                <Text>ShelfScreen</Text>
            </View>
        );
    }
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});