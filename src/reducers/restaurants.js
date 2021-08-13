import { FETCH_ALL_RESTAURANTS } from "../actions/actionType/actionType";
const restaurantInitialState = {
  restaurants: [],
};
const restaurantReducer = (state = restaurantInitialState, action) => {
  switch (action.type) {
    case FETCH_ALL_RESTAURANTS:
      return { ...state, restaurants: action.payload };
    default:
      return state;
  }
};
export default restaurantReducer;
