import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import {SQLITE} from 'react-native-sqlite-storage';
var db = SQLITE.openDatabase({name: 'LiquorDB'});

class ShelfScreen extends React.Component {
    state = {
        scannedBarcodeList: [],
    };

    renderScreen = () => {
        const isFocused = this.props.navigation.isFocused();

        const { navigation } = this.props;
        const upc = navigation.getParam('scannedUPC', 'Currently Empty');

        if (!isFocused) {
            return null;
        } else if (isFocused) {
            return (
                <Text>{upc}</Text>
            );
        }
    }

    render () {
        return(
            <View style={styles.container}>
                {this.renderScreen()}
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

export default withNavigationFocus(ShelfScreen);