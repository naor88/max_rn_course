import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';

import MainText from '../../components/UI/MainText/MainText';

class PickLocation extends Component {
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.placeholder}>
                    <MainText>Map</MainText>
                </View>
                <View style={styles.button}>
                    <Button title="Current Location" onPress={()=>{alert("We know where you are!")}}></Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center"
    },
    placeholder: {
        borderWidth: 1,
        borderColor: "white",
        backgroundColor: "#eee",
        width: "80%",
        height: 250
    },
    button:{
        margin: 8,
    },
});

export default PickLocation;