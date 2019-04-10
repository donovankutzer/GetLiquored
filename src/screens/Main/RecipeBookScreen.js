import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { withNavigationFocus } from 'react-navigation';

class RecipeBookScreen extends React.Component {

    renderScreen = () => {
        const isFocused = this.props.navigation.isFocused();

        if (isFocused) {
            return null;
        } else if (isFocused) {
            return (
                <Text>RecipeBookScreen</Text>
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

export default withNavigationFocus(RecipeBookScreen);