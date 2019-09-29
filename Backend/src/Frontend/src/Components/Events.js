import React, { Component } from 'react'
import './CSS/event_style.scss';

export default class Events extends Component {
    render() {
        return (
            <div>
              <div class="card">
                   
                   <div class="card-header">
                     Featured
                   </div>
                   <div className="card-body">
                     <h5 className="card-title">Special title treatment</h5>
                     <p class="card-text">With supporting text below as a natural lead-in to additional content0.</p>
                 </div>
                   <ul className="list-group list-group-flush">
                     <li className="list-group-item">Date</li>
                     <li className="list-group-item">Location</li>
                   </ul>
                   <div className = "carb-body">
                 
                   <a href="#" className="btn btn-primary">ASAP</a>
                   
                   <a href="#" className="btn btn-primary" >Learn more</a>
                 
                   </div>
                 
                 </div>


                
            </div>
        )
    }
}
