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
                <Link to={`/order`}>
                <button id="order-button" disabled={disabled} onClick={toOrder}>Add to Order</button>
                </Link>
               

            </form>
      </div>
  );
};
export default Form;
