import React from "react";
import "./style.css";

//components
import Navbar from "../Navbar/Navbar";
import Restaurant from "../Restaurant/Restaurant";
import Banner from "./HomePageBanner/Banner";
import { useSelector } from "react-redux";
import CarouselContainer from "./CarouselContainer";

const Home = ({ ...rest }) => {
  // const user = JSON.parse(localStorage.getItem("profile"));
  const AllRestaurants = useSelector((state) => state.restaurant.restaurants);

  return (
    <div className="HomePage">
      <Navbar />
      <div className="homePageBanner">
        <div className="bannerWrapper">
          <CarouselContainer />
        </div>
      </div>
      <div className="listContainer">
        <div className="filters">
          <div className="restaurantCount">
            <h2>{AllRestaurants.length} restaurants</h2>
          </div>
          <div className="filterButton">
            <button>Rating</button>
            <button>Price</button>
          </div>
        </div>
        <Restaurant
          restaurants={AllRestaurants}
          handleRestaurant={rest.handleRestaurant}
        />
      </div>
    </div>
  );
};

export default Home;
