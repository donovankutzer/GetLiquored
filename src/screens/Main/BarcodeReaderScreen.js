import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { withNavigationFocus } from 'react-navigation';

class BarcodeReaderScreen extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            camera: {
                type: RNCamera.Constants.Type.back,
                barcodeFinderVisible: true,
                // Storing scanned barcodes in an array for now
                // Will need to make the data go to a database at some point
                barcode: '',
            }
        };
    }

    onBarCodeRead = (scan) => {
        if (scan.data != null) {
            alert(scan.type);
            this.setState({
                barcode: scan.data
            });
            this.props.navigation.navigate('Shelf',{scannedUPC: this.state.barcode});
        }
        return;
    }
    
    renderScreen = () => {
        const isFocused = this.props.navigation.isFocused();

        if (!isFocused) {
            return null;
        } else if (isFocused) {
            return (
                <RNCamera
                    barcodeFinderVisible={this.state.camera.barcodeFinderVisible}
                    barcodeFinderWidth={280}
                    barcodeFinderHeight={220}
                    barcodeFinderBorderColor="white"
                    barcodeFinderBorderWidth={2}
                    captureAudio={false}
                    defaultTouchToFocus
                    onBarCodeRead={this.onBarCodeRead.bind(this)}
                    permissionDialogTitle={'Camera Permission'}
                    permissionDialogMessage={'We need your permission to use the camera.'}
                    ref={ref => this.camera = ref}
                    style={styles.preview}
                    type={this.state.camera.type}
                />
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
        flexDirection: 'row',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
});

export default withNavigationFocus(BarcodeReaderScreen);