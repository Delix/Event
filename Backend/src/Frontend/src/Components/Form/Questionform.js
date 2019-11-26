import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../CSS/qform_style.scss';
import { getnumber } from "../../actions/form";



function Questionform(props) 
{
   let noofguest = 2;
   let group = false;



   Questionform.proptypes = {

    getnumber: PropTypes.func.isRequired,
    noofguest: PropTypes.number.isRequired,
    group: PropTypes.bool.isRequired
  
    

};  

 const selectbook = () =>
 {
   group = true;
  
  document.getElementById("c1").style.visibility = "visible";


  }
  const updatenoofguest = (event) =>
  {
     noofguest = event.target.value;
    
   
  }

const finalizegroup = (e) =>
{
  let guest = document.getElementById("guest");
  let message = document.getElementById("message");
  if(guest.checkValidity())
  {
    group = false; 
    props.getnumber(noofguest); 
    noofguest = 2;

  }
  else
  {    message.innerHTML = guest.validationMessage;
    e.preventDefault();

  }


}
const finalizesingle = () =>
{
  props.getnumber(1);
  group = false; 
  noofguest = 2;
}


  

        return (
          
          <div className = "card">
            <div className = "card-body">
             <div className="jumbotron">
  <h1 className="display-4">Please select one of following type of Booking</h1>
  <hr className="my-4"/>


  <div className="QFcontainer">

   
 
  <Link to = "/Form_1"  value = "Single" onClick = {finalizesingle} className="btn btn-primary btn-lg" >Single Booking</Link>
    

  
 
  <button value = "Group" onClick = {selectbook} className="btn btn-primary btn-lg">Group Booking</button>
   



  </div>


<div id = "c1">

<h1  className = "display-4">Please Kindly indicate How many will be attending below?</h1>
  <hr className="my-4"/>

  <br/>

 
  
 

  <input  id = "guest"type = "number" defaultValue = { noofguest } onChange = {(e) => updatenoofguest(e)} name= "noofguest" min ="2" max = "18" required/>




  <Link onClick =  {(e) => finalizegroup(e)} to= "/Form_1"  className="btn btn-primary btn-lg" >Submit</Link>
  
<br/>
   
    <h6 id = "message"></h6>
    
  

  



  </div>
  


</div>
</div>


</div>



        
        )
}



export default connect(null,{ getnumber })(Questionform);
