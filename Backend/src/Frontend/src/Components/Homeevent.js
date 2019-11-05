import PropTypes from 'prop-types';
import React, { Component } from 'react'
import './CSS/home_style.scss';
import { connect } from 'react-redux';
import Events from './Events'
import { getdiv }  from '../actions/division';
import { getevents,getdivevents,getevent}  from '../actions/event';

class Homeevent extends Component {
  constructor() {
    super();

  
    this.state = {displayQuestions: false};
  }

  static proptypes = {
      division:PropTypes.array.isRequired,
      event:PropTypes.array.isRequired,


      getdiv: PropTypes.func.isRequired,
      getevents:PropTypes.func.isRequired,
      getevent:PropTypes.func.isRequired,
      getdivevents:PropTypes.func.isRequired
      

  };  
  

  componentDidMount()
  {
   
      this.props.getdiv();
      this.props.getevents();

     
     
  }

 setupevent = (divisions) =>
{
  
  if(this.state.div != divisions.id)
  {
    this.props.getdivevents(divisions.id);
  this.setState({
      div : divisions.id
  });
 
  }

  this.setupdisplay();
  document.getElementById("title").innerHTML = divisions.name;
}

setupdisplay()
{
  this.setState({
    displayQuestions: !this.state.displayQuestions
        });
    
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
                        <div key={division.id} className = "col-3">
                               <div   className="card"  >
                                 <div onClick = { this.setupevent.bind(this,division)} data-toggle="modal" data-target="#myModal">
                                      <img   className="card-img-top" src= {division.image} alt="Card image cap"></img>
                                     <div className="card-body">
                                          <h2 className="card-title">{ division.name }</h2>
                                    </div> 
                                </div>
                            
                             </div> 
                                <br/>
                             </div>
            
    
                        )) }

                        
        </div>
                  </div> 
                 

                  <div onClick = {this.setupdisplay.bind(this)} className="modal fade" id="myModal">

    <div className="modal-dialog modal-lg">
      <div className="modal-content">
     
        <div className="modal-header">
     
                
          <h4 className="modal-title" id ="title"></h4>
         
   
          <button type="button"  className="close" data-dismiss="modal">&times;</button>
        </div>
        
        
        <div className="modal-body" id = "body">
       {
             this.state.displayQuestions &&   
            
          <Events />
        }

        </div>
        
   
        
      </div>
    </div>


  </div>
             
             </div>  
            
        )
        
    }
    
}
    
const mapStateToProps = state => ({
    divis: state.division.divisions,
    event: state.event.Events,


});



export default connect(mapStateToProps,{ getdiv,getevents,getdivevents,getevent})(Homeevent);
