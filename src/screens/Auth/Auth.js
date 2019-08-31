import React, {Component} from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, Dimensions } from 'react-native';

import startTabs from '../MainTabs/startMainTab';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import CustomButton from '../../components/UI/CustomButton/CustomButton';
import BackgroundImage from '../../assets/background.jpg';


/**
 * Window height:
 *  Vertical: 411.428571
 *  Horizontal: 683.42857142
 */

class AuthScreen extends Component {
    loginHandler = () => {
        startTabs();
    }

    render(){
        let headingText = null;
        
        if(Dimensions.get("window").height > 500){
            headingText = (
                <MainText>
                    <HeadingText>Please Login</HeadingText>
                </MainText>
            );
            
        }

        return (
            <ImageBackground source={BackgroundImage} style={styles.backgroundImage}>
                <View style={styles.container}>
                    {headingText}
                    <CustomButton onPress={this.loginHandler} color='#29aaf4'>
                        Switch to Login
                    </CustomButton>
                    <View style={styles.inputContainer} >
                        <DefaultInput placeholder="Your email address" />
                        <View style={styles.passwordContainer}>
                            <View style={styles.passwordWrapper}>
                                <DefaultInput placeholder="Password" />
                            </View>
                            <View style={styles.passwordWrapper}>
                                <DefaultInput placeholder="Confirm password" />
                            </View>
                        </View>
                    </View>
                    <CustomButton onPress={this.loginHandler} color='#29aaf4'>
                        Submit
                    </CustomButton>
                    <CustomButton onPress={()=>{alert(Dimensions.get("window").height)}} color='#29aaf4'>
                        Test
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
    passwordContainer: {
        flexDirection: Dimensions.get("window").height > 500 ? "column" :"row",
        justifyContent: "space-between"
    },
    passwordWrapper: {
        width: Dimensions.get("window").height > 500 ? "100%" :"45%"
    },
    input: {}
})

export default AuthScreen;