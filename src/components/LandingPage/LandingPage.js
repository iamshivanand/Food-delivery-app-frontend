import React, { useState } from "react";
import banner6 from "../../images/banner6.jpg";
import { useSelector } from "react-redux";

//material ui
import SearchIcon from "@material-ui/icons/Search";
//css
import "./style.css";

import Typewriter from "typewriter-effect";

//components

import Login from "./Login/Login";

//framer-motion
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0, duration: 1.2 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};
const headingVariants = {
  hidden: {
    y: "-100vw",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", delay: 0, duration: 1 },
  },
};

const LandingPage = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const AllRestaurants = useSelector((state) => state.restaurant.restaurants);
  // console.log("AllRestaurants : ", AllRestaurants);
  const handleLogin = () => {
    setIsSignIn(true);
  };
  const handleSignUp = () => {
    setIsSignUp(true);
  };
  const closeLoginOrSignUp = () => {
    setIsSignIn(false);
    setIsSignUp(false);
  };
  return (
    <motion.div
      className="landingPage"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="imageContainer">
        <img src={banner6} alt="foodImage" />
      </div>
      {isSignIn || isSignUp ? (
        <div className="login">
          <Login
            closeLoginOrSignUp={closeLoginOrSignUp}
            isSignIn={isSignIn}
            isSignUp={isSignUp}
            setIsSignIn={setIsSignIn}
            setIsSignUp={setIsSignUp}
          />
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
        <motion.div
          className="searchContainer"
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          <h1>INDIAN SWAD</h1>
        </motion.div>
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
    </motion.div>
  );
};

export default LandingPage;
