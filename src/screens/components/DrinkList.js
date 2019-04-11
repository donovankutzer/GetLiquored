import React from 'react';
import  { StyleSheet, ScrollView } from 'react-native';

import DrinkItem from './DrinkItem';

const drinkList = props => {
    const drinksOutput = props.upcScanned.map((upcNumber, i) => {
        <DrinkItem
            key={i}
            upc={upcNumber}
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