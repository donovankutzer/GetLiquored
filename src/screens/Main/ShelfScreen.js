import React from 'react';
import { View, StyleSheet } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import {ScrollView} from 'react-native-gesture-handler';

import DrinkList from '../components/DrinkList';

class ShelfScreen extends React.Component {
    state = {
        scannedBarcodeList: []
    };

    newScanCheck = () => {
        var upc = this.props.navigation.getParam('scannedUPC', '');

        if (upc && !this.state.scannedBarcodeList.includes(upc)) {
            this.state.scannedBarcodeList.push(upc);
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
                    upc={this.state.scannedBarcodeList}
                />
            )
        }
    }

    render() {
        return (
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