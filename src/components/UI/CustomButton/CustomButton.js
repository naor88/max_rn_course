import React from 'react';
import { TouchableHighlight, Text, View, StyleSheet } from 'react-native';

const customButton = props => (
    <TouchableHighlight onPress={props.onPress}>
        <View style={[styles.button, {backgroundColor: props.color}]}>
            <Text style={styles.text}>{ props.children }</Text>
        </View>
    </TouchableHighlight>
);

const styles = StyleSheet.create({
    button: {
        padding: 10,
        margin: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "white"
    },
    text: {
        color: "white"
    }
});

export default customButton;