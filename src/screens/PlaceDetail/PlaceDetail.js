import React, { Component } from "react";
import { Modal, View, Image, Text, Button, StyleSheet, TouchableOpacity, Platform } from "react-native";
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/Ionicons';

import { deletePlace } from '../../store/actions/index';

class PlaceDetail extends Component {

  onPlaceDeletedHandler = () => {
    this.props.onItemDeleted(this.props.selectedPlace.key);
    this.props.navigator.pop({
      // animated: true,
      // animationType: 'fade'
    });
  }

  render(){
    let modalContent = null;

    if (this.props.selectedPlace) {
      modalContent = (
        <View>
          <Image source={this.props.selectedPlace.image} style={styles.placeImage} />
          <Text style={styles.placeName}>{this.props.selectedPlace.name}</Text>
        </View>
      );
    }
    let iconPrefix = Platform.OS === 'ios' ? 'ios' : 'md';
    return (
      // <Modal
      //   onRequestClose={props.onModalClosed}
      //   visible={props.selectedPlace !== null}
      //   animationType="slide"
      // >
        <View style={styles.modalContainer}>
          {modalContent}
          <View>
            {/* <Button title="Delete" color="red" onPress={props.onItemDeleted} /> */}
            <TouchableOpacity onPress={this.onPlaceDeletedHandler}>
              <Icon size={30} color="red" name={`${iconPrefix}-trash`} />
            </TouchableOpacity>
            {/* <Button title="Close" onPress={props.onModalClosed} /> */}
          </View>
        </View>
      // </Modal>
    );
  };
}
  const styles = StyleSheet.create({
    modalContainer: {
      margin: 22
    },
    placeImage: {
      width: "100%",
      height: 200
    },
    placeName: {
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 28
    }
});

const mapDispatchToProps = dispatch => {
  return {
    onItemDeleted: key => dispatch(deletePlace(key))
  }
}

export default connect(null, mapDispatchToProps)(PlaceDetail);
