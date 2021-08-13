import React from "react";
import "./style.css";
import StarIcon from "@material-ui/icons/Star";
import { Link } from "react-router-dom";
const Restaurant = ({ restaurants, handleRestaurant }) => {
  // const handleRestaurant = () => {};
  return (
    <div className="restaurantContainer">
      {restaurants.map((restaurant, index) => (
        <div
          className="wrapperDiv"
          key={restaurant._id}
          data-info={JSON.stringify(restaurant)}
          onClick={handleRestaurant}
        >
          <Link
            to={"restaurant/" + restaurant._id}
            key={restaurant._id}
            // style={{ textDecoration: "none", height: "90%", width: "90%"  }}
            className="restaurantLink"
          >
            <div className="restaurant">
              <div className="restaurantimageContainer">
                <img src={restaurant.Image} alt={restaurant.name} />
              </div>
              <div className="detailsContainer">
                <div className="restaurantTitle">
                  <h2>{restaurant.name}</h2>
                  {restaurant.FoodTypes.map((type, index) => (
                    <span key={index}>{type.name}&nbsp;&nbsp;</span>
                  ))}
                </div>
                <div className="RatingTimeCostWrapper">
                  <div className="RestaurantRating">
                    <div className="ratingValue">
                      <StarIcon />
                      &nbsp;&nbsp;
                      <span style={{ fontSize: "20px" }}>
                        {restaurant.rating}
                      </span>
                    </div>
                    <div className="ratingText">
                      <span style={{ fontSize: "10px" }}>Rating</span>
                    </div>
                  </div>
                  <div className="DeliveryTime">
                    <div className="DeliveryTimeValue">
                      <span style={{ fontSize: "20px" }}>
                        {restaurant.deliveryTime} mins
                      </span>
                    </div>
                    <div className="DeliveryTimeText">
                      <span style={{ fontSize: "10px" }}>DeliveryTime</span>
                    </div>
                  </div>
                  <div className="cost">
                    <div className="CostValue">
                      <span style={{ fontSize: "20px" }}>
                        Rs {restaurant.cost}
                      </span>
                    </div>
                    <div className="CostText">
                      <span style={{ fontSize: "10px" }}>Cost for two</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Restaurant;
