import React from "react";
import "./style.css";
import SearchIcon from "@material-ui/icons/Search";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { Logout } from "../../actions/auth.js";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
//images
import logo from "../../images/logo.png";
import { useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cartItems = useSelector((state) => state.cart.cartItems);
  // const location = useLocation();
  // const [user, setUser] = React.useState(
  //   JSON.parse(localStorage.getItem("profile"))
  // );
  const user = JSON.parse(localStorage.getItem("profile"));
  // console.log("user", user);
  // console.log(user);
  const logout = () => {
    dispatch(Logout());
    //here display the notification of logout
    history.push("/");
  };
  return (
    <div className="NavigationBar">
      <Link to="/home">
        <div className="logoContainer">
          <img src={logo} alt="logo" />
        </div>
      </Link>
      <div className="SearchBar">
        <div className="inputDiv">
          <input />
        </div>
        <div className="SearchButtonDiv">
          <button>
            <SearchIcon />
          </button>
        </div>
      </div>
      <div className="otherIcons">
        <div className="profileButton" onClick={logout}>
          <PermIdentityIcon />
          <div className="ProfileName">
            &nbsp;&nbsp;
            <span>{user?.result.name}</span>
          </div>
        </div>

        <Link to="/cart" className="cartButton">
          <div className="carCount">
            <span>{cartItems.lenght}</span>&nbsp;&nbsp;
          </div>
          <ShoppingCartIcon />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
