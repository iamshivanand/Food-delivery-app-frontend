import {
  AUTH,
  LOGOUT,
  FETCH_ALL_RESTAURANTS,
  ADD_TO_CART,
} from "./actionType/actionType";
import * as api from "../api/index.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

// export const authoriseUser = (data) => async (dispatch) => {
//   try {
//     dispatch({ type: AUTH, data });
//   } catch (error) {
//     console.log(error);
//   }
// };
export const Logout = () => async (dispatch) => {
  try {
    dispatch({ type: LOGOUT });
    toast("Logout Successfully");
  } catch (error) {
    console.log(error);
    toast("Error in Logout!!");
  }
};
export const signin = (formData, history) => async (dispatch) => {
  try {
    //log in the user
    const { data } = await api.signIn(formData);
    const { message } = data;

    // console.log(message);

    if (data.result) {
      // console.log("history", history);
      const action = { type: AUTH, data };
      dispatch(action);

      history.push("/home");
    }

    if (message) {
      toast(`${message}`);
    } else {
      toast("Sign In Successfull");
    }
  } catch (error) {
    console.log(error.message);
    toast("Error in Sign In");
  }
};
export const signup = (formData, history) => async (dispatch) => {
  try {
    //sign up the user
    const { data } = await api.signUp(formData);
    // console.log("signUp data", data);
    const { message } = data;
    if (data.result) {
      const action = { type: AUTH, data };
      dispatch(action);

      history.push("/home");
    }
    if (message) {
      toast(`${message}`);
    } else {
      toast("Sign Up Successfull");
    }
  } catch (error) {
    console.log(error);
    toast("Error in Sign Up");
  }
};

export const getRestaurants = () => async (dispatch) => {
  try {
    const { data } = await api.getRestaurants();
    // console.log(data);
    const action = {
      type: FETCH_ALL_RESTAURANTS,
      payload: data,
    };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
export const addItemToCart = (cartItems) => async (dispatch) => {
  var profile = JSON.parse(localStorage.getItem("profile"));

  var item = {
    id: profile.result._id,
    cartItems,
  };

  try {
    const { data } = await api.addtocart(item);

    const action = {
      type: ADD_TO_CART,
      payload: data.result.cart,
    };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
export const fetchCartItems = () => async (dispatch) => {
  var profile = JSON.parse(localStorage.getItem("profile"));
  var id = profile.result._id;
  try {
    const { data } = await api.getCartItems({ id });

    const action = {
      type: ADD_TO_CART,
      payload: data.result.cart,
    };
    dispatch(action);
  } catch (error) {
    console.log("error", error);
  }
};
