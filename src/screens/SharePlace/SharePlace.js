import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';

import { addPlace } from '../../store/actions/index';

import PageWithSideBar from '../PageWithSideBar/PageWithSideBar';

import PlaceInput from '../../components/PlaceInput/PlaceInput';
import MainText from '../../components/UI/MainText/MainText';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';

class SharePlaceScreen extends PageWithSideBar {

    static navigatorStyle = {
        navBarButtonColor: "green"
    }

    state = {
        placeName: ""
    };

    
    placeNameChangedHandler = val => {
        this.setState({
            placeName: val
        });
    };

    placeAddedHandler = () => {
        if(this.state.placeName.trim() !== ""){
            this.props.onAddPlace(this.state.placeName);
        }
    }

    render(){
        return (
            <ScrollView>
                <View style={styles.container}>
                    <MainText>
                        <HeadingText>Share a place with us!</HeadingText>
                    </MainText>
                    <PickImage />
                    <PickLocation />
                    <PlaceInput 
                        placeName={this.state.placeName} 
                        onChangeText={this.placeNameChangedHandler}/>
                    <View style={styles.button}>
                        <Button title="Share the place" onPress={this.placeAddedHandler}></Button>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center"
    },
    button:{
        margin: 8,
    }
});

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    }
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen);