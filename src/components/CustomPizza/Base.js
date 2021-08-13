import React from "react";

const Base = ({ addBase, pizza, setShowBase, setShowToppings }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];
  const handleShowToppings = () => {
    setShowBase(false);
    setShowToppings(true);
  };
  return (
    <div className="base container">
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <li key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{base}</span>
            </li>
          );
        })}
      </ul>

      {pizza.base && (
        <div className="next">
          <button onClick={handleShowToppings} className="pizzaButton">Show Toppings</button>
        </div>
      )}
    </div>
  );
};

export default Base;
