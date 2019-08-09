

import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail';
import configureStore from './src/store/configureStore';


const store = configureStore();

// Register Screens

Navigation.registerComponent("awesome-places.AuthScreen", () => AuthScreen, store, Provider);
Navigation.registerComponent("awesome-places.SharePlaceScreen", () => SharePlaceScreen, store, Provider);
Navigation.registerComponent("awesome-places.FindPlaceScreen", () => FindPlaceScreen, store, Provider);
Navigation.registerComponent("awesome-places.PlaceDetailScreen", () => PlaceDetailScreen, store, Provider);


// Start app
Navigation.startSingleScreenApp({
    screen: {
        screen: "awesome-places.AuthScreen",
        title: "Login"
    }
});


// import React from 'react';
// import { StyleSheet, View, } from 'react-native';
// import { connect } from 'react-redux';

// import PlaceInput from './src/components/PlaceInput/PlaceInput';
// import PlaceList from './src/components/PlaceList/PlaceList';
// import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

// import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions/index';
// // import placeImage from './src/assets/beautiful-place.jpg';
// // const placeImage = require('./src/assets/beautiful-place.jpg');
// // const placeImage = require('./src/assets/picOne.jpg');

// class App extends React.Component {


//   placesAddedHandler = (placeName) => {
//     this.props.onAddPlace(placeName);
//     console.log(`add place: ${placeName}`);
    
//   };

//   placeDeleteHandler = () => {
//     this.props.onDeletePlace();
//   }

//   modalClosedHandler = () => { 
//     this.props.onDeselectPlace();
//   }

//   placeSelectedHandler = key => {
//     this.props.onSelectPlace(key);
//   }

//   render(){
//     return (
//       <View style={styles.container}>
//         <PlaceDetail 
//           selectedPlace={this.props.selectedPlace} 
//           onItemDeleted={this.placeDeleteHandler}
//           onModalClosed={this.modalClosedHandler} 
//         />
//         <PlaceInput onPlaceAdded={this.placesAddedHandler} />
//         <PlaceList places={this.props.places} onItemSelected={this.placeSelectedHandler}/>
//       </View>

//     );
//   }
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 26,
//     backgroundColor: "white",
//     alignItems: "center",
//     justifyContent: "flex-start"
//   }
// });

// const mapStateToProps = state => {
//   return {
//     places: state.places.places, // the first places mean the slice from the state we given access at combineReducers at storage/ConfigureStorage.js
//     selectedPlace: state.places.selectedPlace
//   };
// };

// const mapDispatchToProps = dispatch => { // dispatch function as input
//   return {
//     onAddPlace: (name) => dispatch(addPlace(name)),
//     onDeletePlace: () => dispatch(deletePlace()),
//     onSelectPlace: (key) => dispatch(selectPlace(key)),
//     onDeselectPlace: () => dispatch(deselectPlace())
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);


