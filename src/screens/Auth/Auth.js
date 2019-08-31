import React, {Component} from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

import startTabs from '../MainTabs/startMainTab';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import CustomButton from '../../components/UI/CustomButton/CustomButton';
import BackgroundImage from '../../assets/background.jpg';

class AuthScreen extends Component {
    loginHandler = () => {
        startTabs();
    }

    render(){
        return (
            <ImageBackground source={BackgroundImage} style={styles.backgroundImage}>
                <View style={styles.container}>
                    <MainText>
                        <HeadingText>Please Login</HeadingText>
                    </MainText>
                    <CustomButton onPress={this.loginHandler} color='#29aaf4'>
                        Switch to Login
                    </CustomButton>
                    <View style={styles.inputContainer} >
                        <DefaultInput placeholder="Your email address" />
                        <DefaultInput placeholder="Password" />
                        <DefaultInput placeholder="Confirm password" />
                    </View>
                    <CustomButton onPress={this.loginHandler} color='#29aaf4'>
                        Submit
                    </CustomButton>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // borderColor: 'red',
        // borderWidth: 1
        flex: 1,
        justifyContent: "center",
        // flexDirection: 'row'
        alignItems: 'center'
    },
    backgroundImage: {
        width: "100%",
        flex: 1
    },
    inputContainer: {
        width: "80%"
    },
    input: {}
})

export default AuthScreen;