import React, {Component} from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, Dimensions } from 'react-native';

import startTabs from '../MainTabs/startMainTab';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import CustomButton from '../../components/UI/CustomButton/CustomButton';
import BackgroundImage from '../../assets/background.jpg';
import validate from '../../utility/validation';

/**
 * Window height:
 *  Vertical: 411.428571
 *  Horizontal: 683.42857142
 */

class AuthScreen extends Component {

    state = {
        windowHigh: Dimensions.get("window").height,
        controls: {
            email: {
                value: "",
                valid: false,
                validateRule: {
                    isEmail: true
                }
            },
            password: {
                value: "",
                valid: false,
                validateRule: {
                    minLength: 6
                }
            },
            confirmPassword: {
                value: "",
                valid: false,
                validateRule: {
                    equalTo: 'password'
                }
            }
        }
    };

    constructor(props){
        super(props);
        Dimensions.addEventListener("change", this.listenDimensionChange);
    }

    componentWillUnmount(){
        Dimensions.removeEventListener("change", this.listenDimensionChange);
    }

    listenDimensionChange = dims => {
        // console.log(dims);
        // alert(dims.window.height);
        this.setState({windowHigh: dims.window.height});
    }

    loginHandler = () => {
        startTabs();
    }

    updateInputStat = (key, value) => {
        let connectedValue = {};
        if(this.state.controls[key].validateRule.equalTo){
            let equalControl = this.state.controls[key].validateRule.equalTo;
            connectedValue = {
                ...connectedValue,
                equalTo: this.state.controls[equalControl].value
            }
        }
        if(key=="password"){
            connectedValue = {
                ...connectedValue,
                equalTo: value
            }
        }

        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    confirmPassword: {
                        ...prevState.controls.confirmPassword,
                        valid: key=="password" ? validate(prevState.controls.confirmPassword.value, prevState.controls.confirmPassword.validateRule, connectedValue) : prevState.controls.confirmPassword.valid
                    },
                    [key]: {
                        ...prevState.controls[key],
                        value: value,
                        valid: validate(value, prevState.controls[key].validateRule, connectedValue)
                    }
                }
            }
        })
    }

    render(){
        let headingText = null;
        let styles = buildStyles(this.state.windowHigh);
        if(this.state.windowHigh > 500){
            headingText = (
                <MainText>
                    <HeadingText>
                        Please Login
                    </HeadingText>
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
                        <DefaultInput 
                            placeholder="Your email address" 
                            value={this.state.controls.email.value}
                            onChangeText={(val) => this.updateInputStat('email', val)}
                        />
                        <View style={styles.passwordContainer}>
                            <View style={styles.passwordWrapper}>
                                <DefaultInput 
                                    placeholder="Password"
                                    value={this.state.controls.password.value}
                                    onChangeText={(val) => this.updateInputStat('password', val)}
                                />
                            </View>
                            <View style={styles.passwordWrapper}>
                                <DefaultInput 
                                    placeholder="Confirm password"
                                    value={this.state.controls.confirmPassword.value}
                                    onChangeText={(val) => this.updateInputStat('confirmPassword', val)}
                                />
                            </View>
                        </View>
                    </View>
                    <CustomButton 
                        onPress={this.loginHandler} 
                        color='#29aaf4'
                        disabled={                            
                            !(this.state.controls.email.valid &&
                            this.state.controls.password.valid &&
                            this.state.controls.confirmPassword.valid)
                        }
                    >
                        Submit
                    </CustomButton>                 
                </View>
            </ImageBackground>
        );
    }
}

const buildStyles = (windowHigh) => {
    return StyleSheet.create({
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
            flexDirection: windowHigh > 500 ? "column" :"row",
            justifyContent: "space-between"
        },
        passwordWrapper: {
            width: windowHigh > 500 ? "100%" :"45%"
        },
        input: {}
    });
};

export default AuthScreen;