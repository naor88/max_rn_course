import {
  ADD_PLACE,
  DELETE_PLACE
  // SELECT_PLACE,
  // DESELECT_PLACE
} from "../actions/actionTypes";

const initialState = {
  places: []
  // selectedPlace: null
};

let images = [
  require('../../assets/pool-overwater-villa.jpg'),
  require('../../assets/Conrad-plunge-pool-bung.jpg'),  
]

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: `${Math.random()}`,
          name: action.placeName,
          image: images[getRandomInt(images.length)]
          // {
          //   uri: 
          //     // "https://c1.staticflickr.com/5/4096/4744241983_34023bf303_b.jpg"
          // }
        })
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== action.placeKey;
        })
        // selectedPlace: null
      };
    // case SELECT_PLACE:
    //   return {
    //     ...state,
    //     selectedPlace: state.places.find(place => {
    //       return place.key === action.placeKey;
    //     })
    //   };
    // case DESELECT_PLACE:
    //   return {
    //     ...state,
    //     selectedPlace: null
    //   };
    default:
      return state;
  }
};

export default reducer;
