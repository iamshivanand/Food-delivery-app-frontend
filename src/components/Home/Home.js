import React from "react";
import "./style.css";

//components
import Navbar from "../Navbar/Navbar";
import Restaurant from "../Restaurant/Restaurant";
import Banner from "./HomePageBanner/Banner";
import { useSelector } from "react-redux";
import banner1 from "../../images/banner1.jpg";
import banner2 from "../../images/banner2.jpg";
import banner3 from "../../images/banner3.jpg";
import banner4 from "../../images/banner4.jpg";
import banner5 from "../../images/banner5.jpg";
import banner6 from "../../images/banner6.jpg";

const Home = ({ ...rest }) => {
  // const user = JSON.parse(localStorage.getItem("profile"));
  const AllRestaurants = useSelector((state) => state.restaurant.restaurants);
  const imageArray = [banner1, banner2, banner3, banner4, banner5, banner6];

  return (
    <div className="HomePage">
      <Navbar />
      <div className="homePageBanner">
        <div className="bannerWrapper">
          {imageArray.map((image, index) => (
            <Banner image={image} key={index} />
          ))}
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
