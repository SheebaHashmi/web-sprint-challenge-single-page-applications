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
      <div className="form-page">
          <BackHome className="home-button"/>
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
                    <option value="Slice">Slice</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                    <option value="Giant">Giant</option>
                </select>
                <label>Choose your topping:</label>
                <div className="toppings">
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
                </div>
                <label>Special Instructions</label>
                <input
                    type="text"
                    id="special-text"
                    name="special"
                    value={order.special}
                    onChange={onChange}
                /><br/>
                <Link to={`/order`}>
                <button id="order-button" disabled={disabled} onClick={toOrder}>Add to Order</button>
                </Link>
               

            </form>
            <img src ="https://cdn.dribbble.com/users/1322388/screenshots/13377076/media/ad59e958501ebf7c06c066f8164a1d99.jpg?compress=1&resize=1600x1200"/>
      </div>
  );
};
export default Form;
