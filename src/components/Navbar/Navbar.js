import React from "react";
import "./style.css";
import SearchIcon from "@material-ui/icons/Search";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
//images
import logo from "../../images/logo.png";
const Navbar = () => {
  return (
    <div className="NavigationBar">
      <div className="logoContainer">
        <img src={logo} alt="logo" />
      </div>
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
        <div className="profileButton">
          <PermIdentityIcon />
          <div className="ProfileName">
            <span>Shiv</span>&nbsp;&nbsp;
          </div>
        </div>
        <div className="cartButton">
          <div className="carCount">
            <span>0</span>&nbsp;&nbsp;
          </div>
          <ShoppingCartIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
