import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { withNavigationFocus } from 'react-navigation';

import ListItem from '../components/ListItem';

const upc = '';
const newScan = false;
const scannedBarcodeList = [];
const listKey = 0;

class ShelfScreen extends React.Component {
    state = {
       /* upc: '',
        newScan: false,
        scannedBarcodeList: [],
        listKey: 0,*/
    }

    newScanHandler = () => {
        if (upc !== '') {
                newScan = true;
        }
    }

    updateUPCValue = () => {
        const { navigation } = this.props;
        if (newScan){
                upc = navigation.getParam('scannedUPC', '');
        }
        this.newScanHandler(); 
    }

    addToShelf = () => {
        scannedBarcodeList.push(upc);
            newScan = false;
            listKey = listKey + 1;
            upc = '';
    }

    validScanHandler = () => {
        //let newScan = this.newScan;
        if (newScan && !scannedBarcodeList.includes(upc) && upc !== '') {
            this.addToShelf();
        }
    }

    renderScreen = () => {
        const isFocused = this.props.navigation.isFocused();
        
        if (!isFocused) {
            return null;
        } else if (isFocused) {
            this.updateUPCValue();
            this.validScanHandler();
            return (
                <ListItem key={listKey}/>
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
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default withNavigationFocus(ShelfScreen);