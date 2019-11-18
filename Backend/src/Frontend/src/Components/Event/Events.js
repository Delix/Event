import React from 'react'
import { connect } from 'react-redux';
import { getevent }  from '../../actions/event';
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
      props.getevent(props.divevents);
   
  }
  
   
  return (
    <div className = "EContainer">
           
    <div className = "row">
    { props.divevents.map( event =>(
       <div className = "col">
       <div key = { event.id } className="card">

            <div className="card-header">
                { event.name }
             </div>


        <ul className="list-group list-group-flush">
        <li className="list-group-item">{ event.date }</li>
        <li className="list-group-item">{event.location }</li>
        <li className = "list-group-item"><Link to = "/form" onClick = {SendtoState}   className="btn btn-primary">RSVP</Link>
         <a onClick = {moreinfo }  className="btn btn-primary" >Learn more</a>
         </li>
        </ul> 
      
      </div>
      <br/>
    </div>
    

)) }
</div>

   </div>    

  )
}

const mapStateToProps = state => ({
  divevents: state.event.DivEvents

});

export default connect(mapStateToProps,{ getevent })(Events)



