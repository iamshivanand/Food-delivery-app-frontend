import { combineReducers } from "redux";

import auth from "./auth";
import restaurant from "./restaurants";
import cart from "./cart";

export default combineReducers({
  auth,
  restaurant,
  cart,
});
