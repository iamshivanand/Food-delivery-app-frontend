import React, { useState } from "react";
import banner6 from "../../images/banner6.jpg";

//material ui
import SearchIcon from "@material-ui/icons/Search";
//css
import "./style.css";

import Typewriter from "typewriter-effect";

//components
import Restaurant from "../Restaurant/Restaurant";
import Login from "./Login/Login";

const LandingPage = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const handleLogin = () => {
    setIsSignIn(true);
  };
  const handleSignUp = () => {
    setIsSignUp(true);
  };
  return (
    <div className="landingPage">
      <div className="imageContainer">
        <img src={banner6} alt="foodImage" />
      </div>
      {isSignIn || isSignUp ? (
        <div className="login">
          <Login />
        </div>
      ) : null}

      <div className="header">
        <div className="navContainer">
          <div className="buttonContainer">
            <button className="button" onClick={handleLogin}>
              Login
            </button>
            <button className="button" onClick={handleSignUp}>
              SignUp
            </button>
          </div>
        </div>
        <div className="searchContainer">
          <h1>INDIAN SWAD</h1>
        </div>
        <div className="tagLine">
          <h2>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: [
                  "Hungry ?",
                  "Movie marathon ?",
                  "Late night at office ?",
                  "Unexpected guests ?",
                  "Cooking gone wrong ?",
                  "Game night ?",
                ],
              }}
            />
          </h2>
          <h4>Order food from your favourite Restaurant near you.</h4>
        </div>
        <div className="searchBar">
          <input />
          <button>
            <SearchIcon />
          </button>
        </div>
      </div>
      <div className="listContainer">
        <div className="filters">
          <div className="restaurantCount">
            <h2>24 restaurants</h2>
          </div>
          <div className="filterButton">
            <button>Rating</button>
            <button>Price</button>
          </div>
        </div>

        <Restaurant />
      </div>
    </div>
  );
};

export default LandingPage;