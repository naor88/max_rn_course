import React, { Component } from 'react';
import {TextInput, StyleSheet, View } from 'react-native';
import CustomButton from '../CustomButton/CustomButton';
// Custom Component

class DefaultInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            secureTextEntry: props.secureTextEntry,
            showPass: false
        }
    }

    showPassHandler = () => {
        this.setState(prevState => ({
            showPass: !prevState.showPass            
        }));
    }

    render(){
        let showPassButton = null;
        let styles = buildStyle(this.state.secureTextEntry);
        if(this.state.secureTextEntry){
            showPassButton = ( 
                <CustomButton width={"20%"} onPress={this.showPassHandler} color={'#93a4b8'}>
                    { this.state.showPass ? "Hide" : "Show" }
                </CustomButton>
            );
        }
        return (
            <View style={{flexDirection: "row"}}>
                <TextInput 
                    // placeholder = {props.placeholder}
                    underlineColorAndroid = "transparent"
                    placeholderTextColor="#FFF"
                    {...this.props}
                    secureTextEntry = {this.state.secureTextEntry && (!this.state.showPass)}
                    style = {[styles.input, this.props.style, !this.props.valid && this.props.touched ? styles.invalid: null]} // list of styles object make marge by priority
                />
                {showPassButton}
            </View>
        );
    }
}
const buildStyle = (secureTextEntry) => {
    return StyleSheet.create({
        input: {
            width: secureTextEntry ? "78%" : "100%",
            borderWidth: 1,
            borderColor: "#eee",
            padding: 5,
            marginTop: 8,
            marginBottom: 8
        },
        invalid: {
            backgroundColor: '#f9c0c0',
            borderColor: 'red'
        }
    });
}

export default DefaultInput;