import React from "react";
import { Route,Switch } from 'react-router-dom';
import Form from './components/Form';
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Switch>
      <Route path='/pizza'>
        <Form/>
      </Route>

      <Route path='/'>
        <HomePage/>
      </Route>
      </Switch>

    </div>
  );
};
export default App;
