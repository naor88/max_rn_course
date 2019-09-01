import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { connect } from 'react-redux';

import PlaceList from '../../components/PlaceList/PlaceList';
import PageWithSideBar from '../PageWithSideBar/PageWithSideBar';

class FindPlaceScreen extends PageWithSideBar {

    static navigatorStyle = {
        navBarButtonColor: "pink"
    };

    state = {
        placesLoaded: false,
        removeButtonAnimation: new Animated.Value(1),
        placesAnimation: new Animated.Value(0)
    }

    placesLoadedHandler = () => {
        Animated.timing(this.state.placesAnimation, {
            toValue: 1,
            duration: 2500,
            useNativeDriver: true
        }).start();
    }

    placesSearchHandler = () => {
        Animated.timing(this.state.removeButtonAnimation, {
            toValue: 0,
            duration: 2500,
            useNativeDriver: true
        }).start(() => {
            this.setState({
                placesLoaded: true
            });
            this.placesLoadedHandler();
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
            <Animated.View style={{
                opacity: this.state.removeButtonAnimation,
                transform: [
                    {
                        // scale: this.state.removeButtonAnimation
                        scale: this.state.removeButtonAnimation.interpolate({
                            inputRange: [0, 1],
                            outputRange: [12, 1]
                        })
                    }
                ]
                }}>
                <TouchableOpacity onPress={this.placesSearchHandler}>
                    <View style={styles.searchButton}>
                        <Text style={styles.searchButtonText}>Find Places</Text>
                    </View>
                </TouchableOpacity>
            </Animated.View>
        );

        if(this.state.placesLoaded){
            content = (
                <Animated.View style={{
                    opacity: this.state.placesAnimation,
                }}>
                    <PlaceList places={ this.props.places } onItemSelected={this.onItemSelectedHandler} />
                </Animated.View>
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