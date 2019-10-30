import './CSS/event_style.scss';
import React from 'react'
import { connect } from 'react-redux';
import { getevent }  from '../actions/form';
import PropTypes from 'prop-types';

function Events(props)
 {
  console.log(props.event)
 


   Events.proptypes =
  {

  getevent: PropTypes.func.isRequired

  };
  
  moreinfo = () =>
  {

  }

  SendtoState = () =>
  {
      this.props.getevent(props.event)
  }
  
   
  return (
    <div className = "EContainer">
           
    
    { props.event.map( event =>(

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
         <a onClick = {this.SendtoState}  className="btn btn-primary">RSVP</a>
         <a onClick = {this.moreinfo }  className="btn btn-primary" >Learn more</a>
         </div>
      
          </div>
       </div>

      </div>

)) }

   </div>    

  )
}


export default connect(null,{ getevent })(Events)



