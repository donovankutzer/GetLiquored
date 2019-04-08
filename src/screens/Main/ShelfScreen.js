import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import {ScrollView} from 'react-native-gesture-handler';

import ListItem from '../components/ListItem';

var scannedUpc = '';
var prevUpc = scannedUpc;
var newScan = false;
var scannedBarcodeList = [];
var listKey = 0;

class ShelfScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            upc: '',
        };
    }

    newScanHandler = () => {
        if (scannedUpc !== '') {
                newScan = true;
        }
    }

    updateUPCValue = () => {
        const { navigation } = this.props;
        if (!newScan){
                scannedUpc = navigation.getParam('scannedUPC', '');
        }
        this.newScanHandler(); 
    }

    addToShelf = () => {
        scannedBarcodeList.push(scannedUpc);
        newScan = false;
        listKey = listKey + 1;

        // WIP
        if (scannedUpc !== prevUpc && scannedUpc !== ''){
            prevUpc = scannedUpc;
            this.setState ({
                upc: scannedUpc,
            });
        }
        prevUpc = scannedUpc;
        scannedUpc = '';
    }

    validScanHandler = () => {
        if (newScan && !scannedBarcodeList.includes(scannedUpc) && scannedUpc !== '') {
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
                <ScrollView style={styles.scrollview} key={listKey}> 
                    <Text> 
                        {scannedBarcodeList} 
                    </Text> 
                </ScrollView>
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
    },
    scrollview: {
        width: 340,
        backgroundColor: '#ffffff',
    }
});

export default withNavigationFocus(ShelfScreen);