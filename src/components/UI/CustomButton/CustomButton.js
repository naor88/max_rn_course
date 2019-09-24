import React from 'react';
import { TouchableHighlight, TouchableNativeFeedback, Text, View, StyleSheet, Platform } from 'react-native';

const customButton = props => {
    let CustomTouchComponent = TouchableHighlight;
    if(Platform.OS === "android"){
        CustomTouchComponent = TouchableNativeFeedback;
    }
    const viewOnly = (
        <View style={[styles.button, {width: props.width}, {backgroundColor: props.color}, props.disabled ? styles.disabled : null]}>
            <Text style={[styles.text, props.disabled ? styles.disabledText : null]}>{ props.children }</Text>
        </View>
    );

    if(props.disabled){
        return viewOnly;
    }

    return (
        <CustomTouchComponent onPress={props.onPress}>
            {viewOnly}
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
    disabled: {
        backgroundColor: "#eee",
        borderColor: "#aaa"
    },
    text: {
        color: "white"
    },
    disabledText: {
        color: "#aaa"
    }
});

export default customButton;