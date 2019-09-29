import React, { Component } from 'react'
import './CSS/home_style.scss';
import Events from './Events'

export default class Homeevent extends Component {

    



    render() {
        return (
            <div className="row">
                <div className = "col" >
                    <h1>Select a Division</h1>
                   
                    <div class="card">

                       <div className="card-body">
                          <h2 className="card-title">Special title treatment</h2>
                           <div className = "carb-body">
                 
                            <button className="btn btn-primary" >View Events</button>
                 
                         </div>
                 
                         </div>
                      
                     </div>
       


                </div>
                
    


            </div>
        )
    }
}
