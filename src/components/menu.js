import React from "react";

const items = [
  {name: "Burgers", description: "Buns and patties", price: "$99"},
  {name: "Fries", description: "Potato sticks", price: "$1"},
  {name: "Salad", description: "Veggies", price: "$5"},
  {name: "Chips", description: "Potato flakes", price: "$1"},
  {name: "Smoothie", description: "Milkshake", price: "$0.1"},
  {name: "Soup", description: "Tomato Soup", price: "$19"}
];

const MenuItem = ({item}) => {
  return (
    <div className="row">
      <div className="col-md-4">{item.name}</div>
      <div className="col-md-4">{item.description}</div>
      <div className="col-md-4">{item.price}</div>
    </div>
  );
};

const Menu = () => {
  return (
    <div className="container">
      <h2>Menu</h2>
      <div className="row">
        <div className="col-md-4">
          <strong>Name</strong>
        </div>
        <div className="col-md-4">
          <strong>Description</strong>
        </div>
        <div className="col-md-4">
          <strong>Price</strong>
        </div>
      </div>
      {items.map(item => {
        return <MenuItem item={item} />;
      })}
    </div>
  );
};

export default Menu;
