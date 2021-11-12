import React from "react";

const Form = () => {
  return (
    <form id="pizza-form">
        <label>Name: </label>
        <input 
            type="text"
            id="input-input"
            
        />
        <label>Pizza Size </label>
        <select id="size-dropdown">
            <option vlaue="">--Slicing Chart--</option>
            <option value="1">Slice</option>
            <option value="2">Medium</option>
            <option value="3">Large</option>
            <option value="4">Giant</option>
        </select>
        <label>Choose your topping:</label>
        <label>Pepperoni</label>
        <input
            type="checkbox"
            name="pepperoni"
        />
        <label>Mushroom</label>
        <input
            type="checkbox"
            name="mushroom"
        />
        <label>Extra Cheese</label>
        <input
            type="checkbox"
            name="cheese"
        />
        <label>Onion</label>
        <input
            type="checkbox"
            name="onion"
        />
        <label>Black Olives</label>
        <input
            type="checkbox"
            name="olives"
        />
        <label>Special Instructions</label>
        <input
            type="text"
            id="special-text"
        />

        <button id="order-button">Add to Order</button>
    </form>
  );
};
export default Form;
