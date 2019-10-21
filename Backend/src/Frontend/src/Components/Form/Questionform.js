import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../CSS/qform_style.scss';
import { getnumber } from "../../actions/form";

class Questionform extends Component 
{
  
  constructor()
  {
    super()
    this.state = {group:false };

  }

  static proptypes = {

    getnumber: PropTypes.func.isRequired
  
    

};  

 selectbook = () =>
 {
  this.setState( {group:true});
  
  document.getElementById("c1").style.visibility = "visible";


  }
finalize = (value) =>
{
 
  
  if(value > 0)
  {
    this.props.getnumber(value);

  } 
  else
  {
    let guest =  document.getElementById("guest").value;
    this.props.getnumber(guest);
  }

   
   

   
}
  
  
  render() {
        return (
            
          <div className = "card">
            <div className = "card-body">
             <div className="jumbotron">
  <h1 className="display-4">Please select one of following type of Booking</h1>
  <hr className="my-4"/>


  <div className="container">

   
 
  <button value = "Single" onClick = {this.finalize.bind(this,1)} className="btn btn-primary btn-lg" >Single Booking</button>
    

  
 
  <button value = "Group" onClick = {this.selectbook} className="btn btn-primary btn-lg">Group Booking</button>
   



  </div>


<div id = "c1"className = "Container">
<h1  className = "display-4">Please Kindly indicate How many will be attending below?</h1>
  <hr className="my-4"/>

  <br/>

 
  <div className="row">   
  

    <div className="col">
  <input id = "guest" type = "number" defaultValue = "2" name= "noofguest" min ="2" max = "18" />
  </div>
  <br/>

  <div className="col">
  <input  onClick = {this.finalize.bind(this,0)} type = "submit" className="btn btn-primary btn-lg" href="#" role="button"/>
  </div>



  
  </div>


  </div>
  


</div>
</div>
</div>
        )
    }
}

const mapStateToProps = state => ({
 
});

export default connect(mapStateToProps,{ getnumber })(Questionform);
