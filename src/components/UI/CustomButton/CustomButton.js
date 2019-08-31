import React from 'react';
import { TouchableHighlight, TouchableNativeFeedback, Text, View, StyleSheet, Platform } from 'react-native';

const customButton = props => {
    let CustomTouchComponent = TouchableHighlight;
    if(Platform.OS === "android"){
        CustomTouchComponent = TouchableNativeFeedback;
    }
    return (
        <CustomTouchComponent onPress={props.onPress}>
            <View style={[styles.button, {backgroundColor: props.color}]}>
                <Text style={styles.text}>{ props.children }</Text>
            </View>
        </CustomTouchComponent>
    );
};

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