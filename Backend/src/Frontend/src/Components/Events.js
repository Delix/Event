import './CSS/event_style.scss';
import React from 'react'

export default function Events(props)
 {
  console.log(props.event)
 
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
         <a href="#" className="btn btn-primary">ASAP</a>
         <a href="#" className="btn btn-primary" >Learn more</a>
         </div>
      
          </div>
       </div>

      </div>

)) }

   </div>    

  )
}





