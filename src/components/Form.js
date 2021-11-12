import React from "react";
import BackHome from "./BackHome";
const Form = (props) => {
    const { order,update,submit,disabled,error } = props

    const onChange = (event) => {
        const {name,value,type,checked} = event.target
        const realValue = type === "checkbox"? checked:value;
        update(name,realValue)
    }
    const onSubmit=(event) => {
        event.preventDefault();
        submit();
    }

  return (
      <div>
          <BackHome/>
          <h2>Please enter your information:</h2>
            <form id="pizza-form" onSubmit={onSubmit}>
                <label>Name: </label>
                <input 
                    type="text"
                    id="input-input"
                    name="name"
                    value={order.name}
                    onChange={onChange}
                />
                <div className="error">{error.name}</div>
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
                    checked={order.pepperoni}
                    onChange={onChange}       
                />
                <label>Mushroom</label>
                <input
                    type="checkbox"
                    name="mushroom"
                    checked={order.mushroom}
                    onChange={onChange}  
                />
                <label>Extra Cheese</label>
                <input
                    type="checkbox"
                    name="cheese"
                    checked={order.cheese}
                    onChange={onChange}   
                />
                <label>Onion</label>
                <input
                    type="checkbox"
                    name="onion"
                    checked={order.onion}
                    onChange={onChange}  
                />
                <label>Black Olives</label>
                <input
                    type="checkbox"
                    name="olives"
                    checked={order.olives}
                    onChange={onChange}  
                />
                <label>Special Instructions</label>
                <input
                    type="text"
                    id="special-text"
                    name="special"
                    value={order.special}
                    onChange={onChange}
                />

                <button id="order-button" disabled={disabled}>Add to Order</button>
            </form>
      </div>
  );
};
export default Form;
