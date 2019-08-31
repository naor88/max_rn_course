import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Platform } from 'react-native';

import ListItem from '../../components/ListItem/ListItem';
import logoutImage from '../../assets/logout.jpg';

import Icon from 'react-native-vector-icons/Ionicons';

class SideDrawer extends Component {
    render(){
        let iconPrefix = Platform.OS === 'ios' ? 'ios' : 'md';
        return (
            <View style={[
                styles.container,
                { width: Dimensions.get("window").width * 0.8 }
            ]}>

                <TouchableOpacity onPress={() => alert('need logout implementation')}>
                    <View style={styles.drawerItem}>
                        <Icon name={`${iconPrefix}-log-out`} size={30} color="#aaa" style={styles.drawerItemIcon}/>
                        <Text>Sign Out</Text>
                    </View>
                </TouchableOpacity>

                <ListItem 
                    placeName="Logout"
                    placeImage={logoutImage}
                    onItemPressed={() => alert('need logout implementation')}/>
                {/* <MainText style={styles.logout}>Logout</MainText> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 56,
        backgroundColor: "white",
        flex: 1
    },
    logout: {
        paddingLeft: 20,
    },
    drawerItem: {
        width: "100%",
        marginBottom: 5,
        padding: 10,
        backgroundColor: "#eee",
        flexDirection: "row",
        alignItems: "center"
    },
    drawerItemIcon: {
        marginRight: 10
    },
    placeImage: {
        marginRight: 8,
        height: 30,
        width: 30
    }
});

export default SideDrawer;