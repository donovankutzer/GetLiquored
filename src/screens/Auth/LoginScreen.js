import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';


export default class LoginScreen extends React.Component {
    state = {
        usernameText: '',
        passwordText: '',
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputPosition}>
                    <TextInput
                        style={styles.inputField}
                        onChangeText={(usernameText) => this.setState({ usernameText })}
                        placeholder="Username"
                        value={this.state.usernameText}
                    />
                    <TextInput
                        style={styles.inputField}
                        onChangeText={(passwordText) => this.setState({ passwordText })}
                        placeholder="Password"
                        value={this.state.passwordText}
                    />
                </View>
                <View style={styles.buttonPosition}>
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
        backgroundColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputPosition: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 20,
    },
    buttonPosition: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    inputField: {
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        height: 40,
        width: 275,
    }
});