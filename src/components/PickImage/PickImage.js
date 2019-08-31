import React, { Component } from 'React';
import {View, Image, Button, StyleSheet } from 'react-native';
import imagePlaceHolder from '../../assets/beautiful-place.jpg';


class PickImage extends Component {
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.placeholder}>
                    <Image source={imagePlaceHolder} style={styles.previewImage}/>
                </View>
                <View style={styles.button}>
                    <Button title="Pick image" onPress={()=>{alert("pick fucking image!")}}></Button>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center"
    },
    placeholder: {
        borderWidth: 1,
        borderColor: "white",
        backgroundColor: "#eee",
        width: "80%",
        height: 250
    },
    button:{
        margin: 8,
    },
    previewImage: {
        width: "100%",
        height: "100%"
    }
});

export default PickImage;