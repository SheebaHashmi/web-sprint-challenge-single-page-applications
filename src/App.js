import React,{useState,useEffect} from "react";
import { Route,Switch } from 'react-router-dom';
import Form from './components/Form';
import * as yup from 'yup';
import HomePage from "./components/HomePage";
import schema from "./validation/formSchema"

const initalData = {
  name: "",
  size: "",
  pepperoni: false,
  mushroom: false,
  cheese: false,
  onion: false,
  olives: false,
  special: "",
}
const initialDisabled = true;
const App = () => {
  const [order, setOrder] = useState(initalData);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [formError, setFormError] = useState({name:""})

  const updateOrder = (inputName,inputValue) => {
    validate(inputName,inputValue)
    setOrder({...order,[inputName]:inputValue})
  }
  const submitOrder = () => {
    const newOrder = {
      name: order.name,
      size: order.size,
      pepperoni: order.pepperoni,
      mushroom: order.mushroom,
      cheese: order.cheese,
      onion: order.onion,
      olives: order.olives,
      special: order.special,
    }
    postNewOrder(newOrder)
  }
  const validate = (name,value) => {
    yup.reach(schema,name).validate(value)
      .then(() => setFormError({...formError,[name]:''}))
      .catch(err => setFormError({...formError,[name]:err.errors}))
  }
  useEffect(() => {
    schema.isValid(order).then(valid => setDisabled(!valid))
  },[order])
  return (
    <div>
      
      <Switch>
      <Route path='/pizza'>
        <Form
         order={order}
         update={updateOrder}
         submit={submitOrder}
         disabled={disabled}
         error={formError}
        />
      </Route>

      <Route path='/'>
        <HomePage/>
      </Route>
      </Switch>

    </div>
  );
};
export default App;
