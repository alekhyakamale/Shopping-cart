import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './Components/Navbar';
import Productlist from './Components/Productlist';
import Details from './Components/Details';
import Cart from './Components/Cart/Cart';
import Default from './Components/Default';

function App() {
  return (
    <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Productlist}/>
          <Route exact path="/Details" component={Details}/>
          <Route exact path="/Cart" component={Cart}/>
          <Route component={Default}/>
        </Switch>
    </React.Fragment>
  );
}

export default App;
