import React from "react";
import "./style.css";
//components
import Navbar from "../Navbar/Navbar";
import Restaurant from "../Restaurant/Restaurant";
const Home = () => {
  return (
    <div className="HomePage">
      <Navbar />
      <div className="homePageBanner">
        
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

export default Home;
