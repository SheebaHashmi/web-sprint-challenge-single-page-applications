import React from "react";
import BackHome from "./BackHome";
import {useHistory,Link} from 'react-router-dom'
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
    const history = useHistory();
    const toOrder = () => {
        history.push('/order')
    }
  return (
      <div>
          <BackHome/>
            <form id="pizza-form" onSubmit={onSubmit}>
                <h2>Please enter your information:</h2>
                <label>Name: </label>
                <input 
                    type="text"
                    id="name-input"
                    name="name"
                    value={order.name}
                    onChange={onChange}
                />
                <div className="error">{error.name}</div>
                <label>Pizza Size </label>
                <select id="size-dropdown" name="size" onChange={onChange}>
                    <option value="">--Slicing Chart--</option>
                    <option value="slice">Slice</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="giant">Giant</option>
                </select>
                <label>Choose your topping:</label>
                <label>Pepperoni</label>
                <input
                    type="checkbox"
                    name="topping1"
                    checked={order.topping1}
                    onChange={onChange}       
                />
                <label>Mushroom</label>
                <input
                    type="checkbox"
                    name="topping2"
                    checked={order.topping2}
                    onChange={onChange}  
                />
                <label>Extra Cheese</label>
                <input
                    type="checkbox"
                    name="topping3"
                    checked={order.topping3}
                    onChange={onChange}   
                />
                <label>Onion</label>
                <input
                    type="checkbox"
                    name="topping4"
                    checked={order.topping4}
                    onChange={onChange}  
                />
                <label>Black Olives</label>
                <input
                    type="checkbox"
                    name="topping5"
                    checked={order.topping5}
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
                <Link to={`/order`}>
                <button id="order-button" disabled={disabled} onClick={toOrder}>Add to Order</button>
                </Link>
               

            </form>
      </div>
  );
};
export default Form;
