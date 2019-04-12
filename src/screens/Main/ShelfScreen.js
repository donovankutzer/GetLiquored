import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { withNavigationFocus } from 'react-navigation';

import DrinkList from '../components/DrinkList';

const { navigation } = this.props;
var upc = '';

class ShelfScreen extends React.Component {
    state = {
        scannedBarcodeList: [],
    };

    newScanCheck = () => {
        upc = navigation.getParam('scannedUPC', '');

        if (upc !== '' && !this.state.scannedBarcodeList.includes(upc)) {
            this.setState(prevState => {
                return {
                    scannedBarcodeList: prevState.scannedBarcodeList.concat(upcNew)
                };
            });
        };  
    }

    renderScreen = () => {
        const isFocused = this.props.navigation.isFocused();
        
        if (!isFocused) {
            return null;
        } else if (isFocused) {
            this.newScanCheck();
            return (
                <DrinkList 
                    upc={this.scannedBarcodeList}
                />
            )
        }
    }

    render () {
        return(
            <View style={styles.container}>
                {this.renderScreen()}
            </View>
        );
    };
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
});

export default withNavigationFocus(ShelfScreen);