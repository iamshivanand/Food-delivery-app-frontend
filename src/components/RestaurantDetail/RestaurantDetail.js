import React, { useState } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../actions/auth";

import StarIcon from "@material-ui/icons/Star";
//components
import CustomPizza from "../CustomPizza/CustomPizza";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const RestaurantDetail = () => {
  const [style, setStyle] = useState("normal");

  window.onscroll = function () {
    const { scrollTop } = document.documentElement;
    // console.log("scrollHeight", scrollHeight);
    // console.log("clientHeight", clientHeight);
    // console.log("scrollTop", scrollTop);
    if (scrollTop > 308) {
      setStyle("stick");
    } else {
      setStyle("normal");
    }
  };
  const [showCustomPizza, setShowCustomPizza] = useState(false);
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  // console.log("pizza", pizza);
  // const [customPizza, setCustomPizza] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  var flag = false;
  const restaurant = JSON.parse(localStorage.getItem("restaurant"));
  const dispatch = useDispatch();
  // console.log("Restaurant", restaurant);

  // localStorage.setItem("CartItemslocal", JSON.stringify(cartItems));
  // const CartItemslocal = JSON.parse(localStorage.getItem("CartItemslocal"));
  // console.log("Answer", CartItemslocal);
  const handleCheckOut = () => {
    // console.log("CartItems", cartItems);
    dispatch(addItemToCart(cartItems));
    localStorage.setItem("cartItemslocal", JSON.stringify(cartItems));
  };

  const addItem = (e) => {
    const food = {
      restrauntName: restaurant.name,
      ...JSON.parse(e.currentTarget.dataset.info),
    };

    var matched = false;

    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === food._id) {
        matched = true;
        break;
      }
    }
    var item = {
      name: food.name,
      quantity: 1,
      price: food.price,
      id: food._id,
    };

    if (!matched) {
      setCartItems([...cartItems, item]);
    }
  };
  const handleCustomPizza = () => {
    setShowCustomPizza(true);
  };

  return (
    <div className="RestaurantDetails">
      <Navbar />
      {showCustomPizza ? (
        <div className="customPizzaContainer">
          <CustomPizza
            pizza={pizza}
            setPizza={setPizza}
            setShowCustomPizza={setShowCustomPizza}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        </div>
      ) : null}
      <div className="RestaurantHeader">
        <div className="RestaurantDescription">
          <div className="RestaurantImage">
            <img src={restaurant.Image} alt="restraunt" />
          </div>
          <div className="aboutRestaurant">
            <h2>{restaurant.name}</h2>
            {/* <h3>Chinese, Fast food, South indian</h3> */}
            <div className="FoodTypeHeader">
              {restaurant.FoodTypes.map((type, index) => (
                <span key={`${index} + ${type._id}`}>
                  {type.name}&nbsp;&nbsp;
                </span>
              ))}
            </div>

            <div className="RatingTimeCostWrapper">
              <div className="RestaurantRating">
                <div className="ratingValue">
                  <StarIcon />
                  &nbsp;&nbsp;
                  <span style={{ fontSize: "20px" }}>{restaurant.rating}</span>
                </div>
                <div className="ratingText">
                  <span style={{ fontSize: "10px" }}>Rating</span>
                </div>
              </div>
              <div className="DeliveryTime">
                <div className="DeliveryTimeValue">
                  <span style={{ fontSize: "20px" }}>
                    {" "}
                    {restaurant.deliveryTime} mins
                  </span>
                </div>
                <div className="DeliveryTimeText">
                  <span style={{ fontSize: "10px" }}>DeliveryTime</span>
                </div>
              </div>
              <div className="cost">
                <div className="CostValue">
                  <span style={{ fontSize: "20px" }}>Rs {restaurant.cost}</span>
                </div>
                <div className="CostText">
                  <span style={{ fontSize: "10px" }}>Cost for two</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="menuAndSmallCart">
        <div className="menu">
          {restaurant.FoodTypes.map((type, index) => (
            <div className="FoodType" key={index}>
              <h2 style={{ borderBottom: "2px solid lightGrey" }}>
                {type.name}
              </h2>
              {type.name === "pizza" ? (
                <span>{type.dishes.length + 1} items</span>
              ) : (
                <span>{type.dishes.length} items</span>
              )}

              {type.name === "pizza" && (
                <div className="items">
                  <div className="itemLeft">
                    <h4>Customized Pizza</h4>
                    <span>Rs 150</span>
                  </div>
                  <div className="itemRight">
                    <button className="addItem" onClick={handleCustomPizza}>
                      ADD
                    </button>
                  </div>
                </div>
              )}

              {type.dishes.map((dish, index) => (
                <div className="items" key={index}>
                  <div className="itemLeft">
                    <h4>{dish.name}</h4>
                    <span>Rs {dish.price}</span>
                  </div>
                  <div className="itemRight">
                    {flag ? (
                      <div className="QuantityOfItem">
                        <div className="decreaseQuantity">
                          <span>-</span>
                        </div>
                        <div className="quantityValue">
                          <span>1</span>
                        </div>
                        <div className="increaseQuantity">
                          <span>+</span>
                        </div>
                      </div>
                    ) : (
                      <button
                        className="addItem"
                        data-info={JSON.stringify(dish)}
                        onClick={addItem}
                      >
                        ADD
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className={style}>
          <div className="cartHeader">
            <h1>Cart</h1>
            <span>{cartItems.length} items</span>
          </div>
          {cartItems.map((item, index) => (
            <div key={index} className="CartItem">
              <span>{item.name}</span>
              <div className="QuantityOfItem">
                <div className="quantityValue">
                  <span>Qty : {item.quantity}</span>
                </div>
              </div>
              <span>{item.price}</span>
            </div>
          ))}
          {!!cartItems.length && (
            <Link
              to="/cart"
              className="CheckOutButton"
              style={{ textDecoration: "none" }}
            >
              <button onClick={handleCheckOut}>CheckOut</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;
