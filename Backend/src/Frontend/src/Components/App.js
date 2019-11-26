import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} 
from "react-router-dom";
import { Provider } from  'react-redux';
import  Store  from '../store';
import Nav from './Header/Nav';
import Dom from 'react-dom';
import Footer from './Footer/Footer';
import MainForm from './Form/Mainform';
import Questionform from './form/Questionform';
import Homeevent from './Homeevent';
import MainEvent from './Event/MainEvent'



export default function App() {
  return (
<Provider store = { Store }>
  <Router>
  <div className = "row">
  <div className = "col">

    <Nav/>
    </div>
    </div>
    <div className = "row">
    <div className = "col">
      <Switch>
      <Route exact path ="/Event">
       <MainEvent/>
      </Route>
        <Route exact path = "/Form" >
        <Questionform  />
      </Route>
      <Route exact path = "/Form_1" >
      <MainForm/>
      </Route>
      <Route exact path = "/">
      <Homeevent/>
      </Route>
      </Switch>
    </div>
    </div>
   
    <Footer/>
  
    </Router>
    </Provider>
  );
}

Dom.render(<App/>,document.getElementById('root'));