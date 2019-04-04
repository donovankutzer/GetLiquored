import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


export default class LoginScreen extends React.Component {
    render () {
        return(
            <View style={styles.container}>
                <View style={styles.textField}>
                    <Text>LoginScreen</Text>
                </View>
                <View style={styles.buttonField}>
                    <Button 
                        width="150"
                        title="Login"
                        color="gray" 
                        onPress={() => this.props.navigation.navigate('Main')}
                    />
                </View>  
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
    textField: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    buttonField: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
});