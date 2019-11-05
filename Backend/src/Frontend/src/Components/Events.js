import './CSS/event_style.scss';
import React from 'react'
import { connect } from 'react-redux';
import { getevent }  from '../actions/event';
import PropTypes from 'prop-types';
import {
  Link
} 
from "react-router-dom";


function Events(props)
 {

 


   Events.proptypes =
  {

  getevent: PropTypes.func.isRequired,
  divevents:PropTypes.array.isRequired

  };
  
  const moreinfo = () =>
  {

  }

  const SendtoState = () =>
  {
    $('#myModal').modal('hide');
      props.getevent(props.divevents);
   
  }
  
   
  return (
    <div className = "EContainer">
           
    
    { props.divevents.map( event =>(
       <div>
       <div key = { event.id } className="card">

            <div className="card-header">
                { event.name }
             </div>


        <ul className="list-group list-group-flush">
        <li className="list-group-item">{ event.date }</li>
        <li className="list-group-item">{event.location }</li>
        </ul> 

       <div className = "carb-body">
          <div className = "row">

         <div className = "col-sm">
         <Link to = "/form" onClick = {SendtoState}   className="btn btn-primary">RSVP</Link>
         <a onClick = {moreinfo }  className="btn btn-primary" >Learn more</a>
         </div>
      
          </div>
       </div>
      
      </div>
      <br/>
    </div>

)) }

   </div>    

  )
}

const mapStateToProps = state => ({
  divevents: state.event.DivEvents

});

export default connect(mapStateToProps,{ getevent })(Events)



