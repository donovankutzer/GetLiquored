import React from 'react';
import  { StyleSheet, ScrollView } from 'react-native';

import DrinkItem from './DrinkItem';

const drinkList = props => {
    const drinksOutput = props.upcScanned.map((upc, i) => {
        <DrinkItem
            key={i}
            upcAdded={upc}
        />
    });
    return <ScrollView style={StyleSheet.listContainer}>{drinksOutput}</ScrollView>;
}

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
});

export default drinkList;