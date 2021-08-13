import { ADD_TO_CART } from "../actions/actionType/actionType";
const initialState = {
  cartItems: [],
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cartItems: action.payload };
    default:
      return state;
  }
};
export default cartReducer;
