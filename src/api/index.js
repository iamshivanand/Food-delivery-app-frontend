import axios from "axios";
const API = axios.create({
  baseURL: "https://food-delivery-jackfruit.herokuapp.com/",
});

export const signIn = (FormData) => API.post("/user/signin", FormData);
export const signUp = (FormData) => API.post("/user/signup", FormData);

//get all restaurants
export const getRestaurants = () => API.get("/restaurant/all-restaurants");

export const addtocart = (data) => API.patch("/user/addtocart", data);
export const getCartItems = (id) => API.post("/user/cartItems", id);
