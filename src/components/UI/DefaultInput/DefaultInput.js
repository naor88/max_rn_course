import React from 'react';
import {TextInput, StyleSheet } from 'react-native';

// Custom Component

const defaultInput = props => (
    <TextInput 
        // placeholder = {props.placeholder}
        underlineColorAndroid = "transparent"
        placeholderTextColor="#FFF"
        {...props}
        style = {[styles.input, props.style]} // list of styles object make marge by priority
    />
)

const styles = StyleSheet.create({
    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#eee",
        padding: 5,
        margin: 8
    }
})

export default defaultInput;