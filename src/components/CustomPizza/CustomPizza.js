import React, { useState } from "react";
import "./style.css";
import Base from "./Base";
import Toppings from "./Toppings";
const CustomPizza = ({
  pizza,
  setPizza,
  setShowCustomPizza,
  cartItems,
  setCartItems,
}) => {
  // const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const [showBase, setShowBase] = useState(true);
  const [showToppings, setShowToppings] = useState(false);

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };
  return (
    <div className="customContainer">
      {showBase && (
        <Base
          addBase={addBase}
          pizza={pizza}
          setShowBase={setShowBase}
          setShowToppings={setShowToppings}
        />
      )}
      {showToppings && (
        <Toppings
          addTopping={addTopping}
          pizza={pizza}
          setShowToppings={setShowToppings}
          setShowCustomPizza={setShowCustomPizza}
         
          setCartItems={setCartItems}
          cartItems={cartItems}
        />
      )}
    </div>
  );
};

export default CustomPizza;
