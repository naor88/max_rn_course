import React, {Component} from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, Dimensions, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';

import { connect } from 'react-redux';
import { tryAuth } from '../../store/actions/index';

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
        authMode: "login",
        controls: {
            email: {
                value: "",
                valid: false,
                touched: false,
                validateRule: {
                    isEmail: true
                }
            },
            password: {
                value: "",
                valid: false,
                touched: false,
                validateRule: {
                    minLength: 6
                }
            },
            confirmPassword: {
                value: "",
                valid: false,
                touched: false,
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

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {
                authMode: prevState.authMode === "login" ? "signup" : "login"
            }
        })
    }

    listenDimensionChange = dims => {
        // console.log(dims);
        // alert(dims.window.height);
        this.setState({windowHigh: dims.window.height});
    }

    loginHandler = () => {
        const authData = {
            email: this.state.controls.email.value,
            password: this.state.controls.password.value
        };
        this.props.onLogin(authData)
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
                        valid: validate(value, prevState.controls[key].validateRule, connectedValue),
                        touched: true
                    }
                }
            }
        })
    }

    render(){
        let headingText = null;
        let confirmPasswordControl = null;
        let styles = buildStyles(this.state.windowHigh, this.state.authMode);
        if(this.state.windowHigh > 500){
            headingText = (
                <MainText>
                    <HeadingText>
                        Please {this.state.authMode === "login" ? "Login" : "SignUp"} 
                    </HeadingText>
                </MainText>
            );            
        }

        if(this.state.authMode === "signup"){
            confirmPasswordControl = (
                <View style={styles.passwordWrapper}>
                    <DefaultInput 
                        placeholder="Confirm password"
                        value={this.state.controls.confirmPassword.value}
                        valid={this.state.controls.confirmPassword.valid}
                        touched={this.state.controls.confirmPassword.touched}
                        onChangeText={(val) => this.updateInputStat('confirmPassword', val)}
                        secureTextEntry
                    />
                </View>
            )
        }


        return (
            <ImageBackground source={BackgroundImage} style={styles.backgroundImage}>
                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.container}>
                            {headingText}
                            <CustomButton onPress={this.switchAuthModeHandler} width="60%" color='#29aaf4'>
                                Switch to {this.state.authMode === "login" ? "SignUp" : "Login"}
                            </CustomButton>                    
                            <View style={styles.inputContainer} >
                                <DefaultInput 
                                    placeholder="Your email address" 
                                    value={this.state.controls.email.value}
                                    valid={this.state.controls.email.valid}
                                    touched={this.state.controls.email.touched}
                                    onChangeText={(val) => this.updateInputStat('email', val)}
                                    autoCapitalize={false}
                                    autoCorrect={false}
                                    keyboardType="email-address"
                                    
                                />
                                <View style={styles.passwordContainer}>
                                    <View style={styles.passwordWrapper}>
                                        <DefaultInput 
                                            placeholder="Password"
                                            value={this.state.controls.password.value}
                                            valid={this.state.controls.password.valid}
                                            touched={this.state.controls.password.touched}
                                            onChangeText={(val) => this.updateInputStat('password', val)}
                                            secureTextEntry
                                        />
                                    </View>
                                    {confirmPasswordControl}
                                </View>
                            </View>
                            <CustomButton 
                                onPress={this.loginHandler} 
                                color='#29aaf4'
                                disabled={                            
                                    !(this.state.controls.email.valid &&
                                    this.state.controls.password.valid &&
                                    (this.state.controls.confirmPassword.valid || this.state.authMode == "login")
                                    )
                                }
                            >
                                Submit
                            </CustomButton>  
                        </View>
                    </TouchableWithoutFeedback>               
                </KeyboardAvoidingView>
            </ImageBackground>
        );
    }
}

const buildStyles = (windowHigh, authMode) => {
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
            width: authMode =="login" || windowHigh > 500 ? "100%" :"45%"
        },
        input: {}
    });
};

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (authData) => dispatch(tryAuth(authData))
    };
}

export default connect(null,mapDispatchToProps)(AuthScreen);