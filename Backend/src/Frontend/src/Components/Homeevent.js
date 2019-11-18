import PropTypes from 'prop-types';
import React, { Component } from 'react'
import './CSS/home_style.scss';
import { connect } from 'react-redux';
import {
  Link
} 
from "react-router-dom";
import { getdiv }  from '../actions/division';
import { getdivevents }  from '../actions/event';

class Homeevent extends Component {
  
  static proptypes = {
      division:PropTypes.array.isRequired,


      getdiv: PropTypes.func.isRequired,
      getdivevents:PropTypes.func.isRequired
      

  };  
  

  componentDidMount()
  {
   
      this.props.getdiv();

     
     
  }

 setupevent = (division) =>
{
  
     console.log(division) 
    this.props.getdivevents(division.id);
 
 
}

    render() {
          
     
        return (
          
            <div className="hContainer">
              
        <div className = "hcontainer1">
             <div className = "row">
                <div className = "col" >
                <h1>Select a Division</h1>
                </div>
             </div>
             </div>

                <br/>

<div className = "hcontainer2">
        <div className = "row">
              
                   { this.props.divis.map( division =>(
                        <div key={division.id} onClick = { this.setupevent.bind(this,division)} className = "col-3">
                             <Link to = "/form"   className="card">
                             
                                 
                                      <img   className="card-img-top" src= {division.image} alt="Card image cap"/>
                      
                                
                           
                
                             </Link>
                                <br/>
                             </div>
            
    
                        )) }

                        
        </div>
                  </div> 
                   
             </div>  
            
        )
        
    }
    
}
    
const mapStateToProps = state => ({
    divis: state.division.divisions


});



export default connect(mapStateToProps,{ getdiv,getdivevents})(Homeevent);
