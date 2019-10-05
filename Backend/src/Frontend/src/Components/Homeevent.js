import PropTypes from 'prop-types';
import React, { Component } from 'react'
import './CSS/home_style.scss';
import Events from './Events';
import { connect } from 'react-redux';
import { getdiv }  from '../actions/division';
import { getevents,getdivevents }  from '../actions/event';

class Homeevent extends Component {
 

  static proptypes = {
      division:PropTypes.array.isRequired,
      Event: PropTypes.array.isRequired,

      getdivevents: PropTypes.func.isRequired,
      getdiv: PropTypes.func.isRequired,
      getevents:PropTypes.func.isRequired
  };  
  

  componentDidMount()
  {
      this.props.getdiv();
      this.props.getevents();
     
  }
  



    render() {
        return (
            <main className="row">
              
              <section>
                <div className = "col" >
                <h1>Select a Division</h1>
                </div>
                <div className="w-100"></div>
        
                <div className = "col">
                   { this.props.divis.map( division =>(
                      

                               <div key={division.id} className="card"  >
                                 <div onClick = {this.props.getdivevents.bind(this, division.id)}>
                                      <img   className="card-img-top" src= {division.image} alt="Card image cap"></img>
                                     <div className="card-body">
                                          <h2 className="card-title">{ division.name }</h2>
                                    </div> 
                                </div>
                            
                             </div> 
                      
                    
    
                        )) }
                  
                  </div> 
                  </section>

                </main>
            
        )
    }
}
    
const mapStateToProps = state => ({
    divis: state.division.divisions,
    eve: state.event.Events
});



export default connect(mapStateToProps,{ getdiv,getevents,getdivevents })(Homeevent);
