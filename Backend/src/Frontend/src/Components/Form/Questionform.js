import React, { Component } from 'react'
import Form from './Form'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../CSS/qform_style.scss';
import { getnumber } from "../../actions/form";

class Questionform extends Component 
{
  
  constructor()
  {
    super()
    this.state = {group:false,noofguest:2};
 
  }

  static proptypes = {

    getnumber: PropTypes.func.isRequired
  
    

};  

 selectbook = () =>
 {
  this.setState( {group:true});
  
  document.getElementById("c1").style.visibility = "visible";


  }
  updatenoofguest = (event) =>
  {
    
      this.setState({noofguest:event.target.value});
    
   
  }

finalizegroup = (event) =>
{
  let guest = document.getElementById("guest");

    this.props.getnumber(guest.value);

 
    event.preventDefault();
  
  

   
}
finalizesingle = () =>
{
  this.props.getnumber(1);
}
  
  
  render() {
        return (
            
          <div className = "card">
            <div className = "card-body">
             <div className="jumbotron">
  <h1 className="display-4">Please select one of following type of Booking</h1>
  <hr className="my-4"/>


  <div className="container">

   
 
  <button value = "Single" onClick = {this.finalizesingle} className="btn btn-primary btn-lg" >Single Booking</button>
    

  
 
  <button value = "Group" onClick = {this.selectbook} className="btn btn-primary btn-lg">Group Booking</button>
   



  </div>


<div id = "c1"className = "Container">
<h1  className = "display-4">Please Kindly indicate How many will be attending below?</h1>
  <hr className="my-4"/>

  <br/>

 
  
  
<form onSubmit = {this.finalizegroup.bind(this)}>

  <input  id = "guest" type = "number" defaultValue = { this.state.noofguest } onChange = {this.updatenoofguest.bind(this)} name= "noofguest" min ="2" max = "18" required/>




  <input   type = "submit" className="btn btn-primary btn-lg" />
  

  </form>

  



  </div>
  


</div>
</div>
</div>
        )
    }
}


export default connect(null,{ getnumber })(Questionform);
