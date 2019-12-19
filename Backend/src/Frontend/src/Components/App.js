import React,{ Component }  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} 
from "react-router-dom";
import Nav from './Header/Nav';
import Footer from './Footer/Footer';
import MainForm from './Form/Mainform';
import Questionform from './form/Questionform';
import Login from './Login/login'
import Homeevent from './Homeevent';
import { Autosignup } from '../actions/auth'
import PropTypes from 'prop-types';
import MainEvent from './Event/MainEvent'
import { connect } from 'react-redux';


class App extends Component
{

 static proptypes = {
    isAuthenticated:PropTypes.bool.isRequired,
    Autosignup:PropTypes.func.isRequired
};  

componentDidMount()
{
  //this.props.Autosignup();
}
render()
{
  return (

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
      <Route exact path = "/Login">
      <Login/>
      </Route>
      </Switch>
    </div>
    </div>
   
    <Footer/>
  
    </Router>
  
  );
}
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.token !== null

});

export default connect (mapStateToProps,{Autosignup})(App);
