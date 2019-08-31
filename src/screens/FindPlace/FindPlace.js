import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import PlaceList from '../../components/PlaceList/PlaceList';
import PageWithSideBar from '../PageWithSideBar/PageWithSideBar';

class FindPlaceScreen extends PageWithSideBar {

    static navigatorStyle = {
        navBarButtonColor: "pink"
    };

    state = {
        placesLoaded: false
    }

    placesSearchHandler = () => {
        this.setState({
            placesLoaded: true
        });
    }

    onItemSelectedHandler = key => {
        const selectedPlace = this.props.places.find(i=>i.key==key);
        this.props.navigator.push({
            screen: "awesome-places.PlaceDetailScreen",
            title: `Place Detail: ${selectedPlace.name}`,
            passProps: {
                selectedPlace,
            }
        });
    }

    render(){
        let content = (
            <TouchableOpacity onPress={this.placesSearchHandler}>
                <View style={styles.searchButton}>
                    <Text style={styles.searchButtonText}>Find Places</Text>
                </View>
            </TouchableOpacity>
        );

        if(this.state.placesLoaded){
            content = (
                    <PlaceList places={ this.props.places } onItemSelected={this.onItemSelectedHandler} />
            );
        }

        return (
            <View style={this.state.placesLoaded ? null :styles.buttonContainer}>
                {content}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    searchButton: {
        borderColor: "orange",
        borderWidth: 3,
        borderRadius: 50,
        padding: 20
    },
    searchButtonText: {
        color: "orange",
        fontWeight: "bold",
        fontSize: 26
    }
});

const mapStateToProps = (state) => {
    return {
        places: state.places.places
    }
}

export default connect(mapStateToProps, null)(FindPlaceScreen);