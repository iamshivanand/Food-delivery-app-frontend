import React, { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
//components
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, fetchCartItems } from "../../actions/auth";

//images
import logo from "../../images/logo.png";
const Cart = () => {
  // const handleAddressSubmit = (e) => {
  //   e.preventDefault();
  // };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const items = useSelector((state) => state.cart.cartItems);
 
  var totalPrice = 0;
  for (let i = 0; i < items.length; i++) {
    totalPrice += items[i].price;
  }
  const handlePlaceOrder = () => {
    if (items.length) {
      dispatch(addItemToCart([]));
      setOrderPlaced(true);
    }
  };
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <div className="Cart">
      <div className="CartNavbar">
        <Link to="/home">
          <div className="logoContainer">
            <img src={logo} alt="logo" />
          </div>
        </Link>
        <div className="profileButton">
          <PermIdentityIcon />
          <div className="ProfileName">
            <span>{user?.result.name}</span>&nbsp;&nbsp;
          </div>
        </div>
      </div>
      {/* <div className="AddAddressDiv">
        <h2>Add Address</h2>
        <div className="addressForm">
          <form>
            <input type="text" name="Address" placeholder="Add Your Address" />
            <input type="text" name="Address" placeholder="LandMark" />
            <input
              type="submit"
              value="Submit"
              className="AddressSubmitButton"
              onClick={handleAddressSubmit}
            />
          </form>
        </div>
      </div> */}
      <div className="cartItemsDiv">
        <h1>Cart Items</h1>
        {items.map((item, index) => (
          <div className="cartItems" key={index}>
            <div className="leftPart">
              <h4>{item.name}</h4>
            </div>
            <div className="rightPart">
              <div className="QuantityOfItem">
                <div className="quantityValue">
                  <span>Qty {item.quantity}</span>
                </div>
              </div>
              <div className="PriceOfItem">
                <h4>Rs {item.price}</h4>
              </div>
            </div>
          </div>
        ))}
        {orderPlaced ? (
          <div className="orderplacedafter">
            <h1>Order Placed !!</h1>
            <Link to="/home">
              <button className="linkToHome">Go To Home</button>
            </Link>
          </div>
        ) : (
          <div className="cartItemswrapper">
            <div className="cartItems">
              <div className="leftPart">
                <h4>Total Price</h4>
              </div>
              <div className="rightPart">
                <div className="QuantityOfItem">
                  <div className="quantityValue">
                    <span>Qty {items.length}</span>
                  </div>
                </div>
                <div className="PriceOfItem">
                  <h4>Rs {totalPrice}</h4>
                </div>
              </div>
            </div>
            <div className="PlaceButton">
              <button onClick={handlePlaceOrder}>PlaceOrder</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
