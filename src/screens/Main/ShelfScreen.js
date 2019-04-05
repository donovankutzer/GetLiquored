import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { withNavigationFocus } from 'react-navigation';

class ShelfScreen extends React.Component {
    state = {
        scannedBarcodeList: [],
    };

    renderScreen = () => {
        const isFocused = this.props.navigation.isFocused();

        if (!isFocused) {
            return null;
        } else if (isFocused) {
            return (
                <Text>ShelfScreen</Text>
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