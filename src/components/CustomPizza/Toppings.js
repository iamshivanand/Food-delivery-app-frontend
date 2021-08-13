import React from "react";

const Toppings = ({
  addTopping,
  pizza,
  setShowToppings,
  setShowCustomPizza,

  cartItems,
  setCartItems,
}) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];
  const handleOrder = () => {
    setShowToppings(false);
    setShowCustomPizza(false);
    var matched = false;
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].name === "custom Pizza") {
        matched = true;
        break;
      }
    }
    var item = {
      name: "custom Pizza",
      quantity: 1,
      price: 150,
      id: "12121d212df4gd2fgsdf3sfsdf6ssdfsdfs",
    };
    if (!matched) {
      setCartItems([...cartItems, item]);
    }
  };
  return (
    <div className="toppings container">
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <li key={topping} onClick={() => addTopping(topping)}>
              <span className={spanClass}>{topping}</span>
            </li>
          );
        })}
      </ul>
      <button onClick={handleOrder} className="pizzaButton">
        Order
      </button>
    </div>
  );
};

export default Toppings;
