import React, { useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
// import ProtectedRoute from "./ProtectedRoute";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getRestaurants } from "./actions/auth";
// import { useSelector } from "react-redux";
//import components
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import RestaurantDetail from "./components/RestaurantDetail/RestaurantDetail";
import Cart from "./components/cart/cart";
import ScrollToTop from "./ScrollToTop";

import { AnimatePresence } from "framer-motion";

function App() {
  const dispatch = useDispatch();
  // const history = useHistory();
  const loggedIn = localStorage.getItem("loggedIn");
  // console.log("isLoggedin :", loggedIn);

  const hello = useSelector((state) => state.auth);
  // console.log("Hello", hello.loggedIn);
  // const [restaurant, setRestaurant] = useState("");
  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch, loggedIn, hello]);

  const handleRestaurant = (e) => {
    localStorage.setItem("restaurant", e.currentTarget.dataset.info);

    // console.log("Restaurant", restaurant);
  };

  // const loggedIn = useSelector((state) => state.auth.loggedIn);
  // console.log("Auth", !!loggedIn);
  return (
    <div className="App">
      <ScrollToTop />
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route exact path="/">
            {loggedIn ? (
              <Home handleRestaurant={handleRestaurant} />
            ) : (
              <LandingPage />
            )}
          </Route>
          <Route exact path="/home">
            {loggedIn ? (
              <Home handleRestaurant={handleRestaurant} />
            ) : (
              <LandingPage />
            )}
          </Route>

          <Route exact path={`/restaurant/:id`}>
            {loggedIn ? <RestaurantDetail /> : <LandingPage />}
          </Route>
          <Route exact path="/cart">
            {loggedIn ? <Cart /> : <LandingPage />}
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
