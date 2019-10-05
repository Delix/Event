/*import React, { Component } from 'react'
import './CSS/event_style.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getevents }  from '../actions/division';


export class Events extends Component {


  static proptypes = {
    event:PropTypes.array.isRequired 
};  


componentDidMount()
{
    this.props.getdiv();
}



    render() {
        return (
            <div>
             <div className = "Container">
                    
             </div>

             { this.props.event.map( event =>(

              <div class="card">
                   
                   <div class="card-header">
                     { event.name }
                   </div>
                   <div className="card-body">
                     <h5 className="card-title">{ event.name }</h5>
                     
                     <p class="card-text">With supporting text belo.</p>
                 </div>
                   <ul className="list-group list-group-flush">
                     <li className="list-group-item">{ event.date }</li>
                     <li className="list-group-item">{event.location }</li>
                   </ul>
                   <div className = "carb-body">
                 
                   <a href="#" className="btn btn-primary">ASAP</a>
                   
                   <a href="#" className="btn btn-primary" >Learn more</a>
                 
                   </div>
                 
                 </div>

)) }
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
  divis: state.division.division
});

export default connect(mapStateToProps,{ getdiv })(Event);*/