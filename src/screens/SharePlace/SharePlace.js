import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { addPlace } from '../../store/actions/index'
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import PageWithSideBar from '../PageWithSideBar/PageWithSideBar';
class SharePlaceScreen extends PageWithSideBar {

    placeAddedHandler = placeName => {
        this.props.onAddPlace(placeName);
    }

    render(){
        return (
            <View>
                <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    }
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen);